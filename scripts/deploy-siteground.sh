#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${ROOT_DIR}/.env"
TMP_KEY_FILE=""
TMP_ASKPASS_FILE=""
STARTED_SSH_AGENT=""

read_env_value() {
  local key="$1"
  local line
  line="$(grep -m1 "^${key}=" "${ENV_FILE}" || true)"
  if [[ -z "${line}" ]]; then
    return 1
  fi
  printf '%s' "${line#*=}"
}

read_private_key_block() {
  awk '
    /^SITEGROUND_SSH_PRIVATE_KEY=/ {
      sub(/^SITEGROUND_SSH_PRIVATE_KEY=/, "")
      print
      capture = 1
      next
    }
    capture {
      print
      if ($0 ~ /END OPENSSH PRIVATE KEY/) {
        exit
      }
    }
  ' "${ENV_FILE}"
}

cleanup() {
  if [[ -n "${TMP_KEY_FILE}" && -f "${TMP_KEY_FILE}" ]]; then
    rm -f "${TMP_KEY_FILE}"
  fi
  if [[ -n "${TMP_ASKPASS_FILE}" && -f "${TMP_ASKPASS_FILE}" ]]; then
    rm -f "${TMP_ASKPASS_FILE}"
  fi
  if [[ -n "${STARTED_SSH_AGENT}" && -n "${SSH_AGENT_PID:-}" ]]; then
    ssh-agent -k >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT

if [[ ! -f "${ENV_FILE}" ]]; then
  echo "Missing .env file at ${ENV_FILE}"
  exit 1
fi

SITEGROUND_SSH_HOST="$(read_env_value SITEGROUND_SSH_HOST || true)"
SITEGROUND_SSH_PORT="$(read_env_value SITEGROUND_SSH_PORT || true)"
SITEGROUND_SSH_USER="$(read_env_value SITEGROUND_SSH_USER || true)"
SITEGROUND_REMOTE_PATH="$(read_env_value SITEGROUND_REMOTE_PATH || true)"
SITEGROUND_SSH_KEY_PATH="${SITEGROUND_SSH_KEY_PATH:-$(read_env_value SITEGROUND_SSH_KEY_PATH || true)}"
SITEGROUND_SSH_PRIVATE_KEY_B64="${SITEGROUND_SSH_PRIVATE_KEY_B64:-$(read_env_value SITEGROUND_SSH_PRIVATE_KEY_B64 || true)}"
SITEGROUND_SSH_PRIVATE_KEY="${SITEGROUND_SSH_PRIVATE_KEY:-$(read_private_key_block || true)}"
SITEGROUND_SSH_PASSPHRASE="${SITEGROUND_SSH_PASSPHRASE:-$(read_env_value SITEGROUND_SSH_PASSPHRASE || true)}"

: "${SITEGROUND_SSH_HOST:?Missing SITEGROUND_SSH_HOST in .env}"
: "${SITEGROUND_SSH_PORT:?Missing SITEGROUND_SSH_PORT in .env}"
: "${SITEGROUND_SSH_USER:?Missing SITEGROUND_SSH_USER in .env}"
: "${SITEGROUND_REMOTE_PATH:?Missing SITEGROUND_REMOTE_PATH in .env}"

SSH_OPTS=(-p "${SITEGROUND_SSH_PORT}" -o StrictHostKeyChecking=accept-new)

if [[ -n "${SITEGROUND_SSH_KEY_PATH:-}" && -f "${SITEGROUND_SSH_KEY_PATH}" ]]; then
  SSH_KEY_PATH="${SITEGROUND_SSH_KEY_PATH}"
elif [[ -n "${SITEGROUND_SSH_PRIVATE_KEY_B64:-}" ]]; then
  TMP_KEY_FILE="$(mktemp)"
  printf '%s' "${SITEGROUND_SSH_PRIVATE_KEY_B64}" | base64 --decode > "${TMP_KEY_FILE}"
  chmod 600 "${TMP_KEY_FILE}"
  SSH_KEY_PATH="${TMP_KEY_FILE}"
elif [[ -n "${SITEGROUND_SSH_PRIVATE_KEY:-}" ]]; then
  TMP_KEY_FILE="$(mktemp)"
  printf '%s\n' "${SITEGROUND_SSH_PRIVATE_KEY}" > "${TMP_KEY_FILE}"
  chmod 600 "${TMP_KEY_FILE}"
  SSH_KEY_PATH="${TMP_KEY_FILE}"
else
  echo "Missing SSH key. Add SITEGROUND_SSH_KEY_PATH or a key value to .env."
  exit 1
fi

SSH_OPTS+=(-i "${SSH_KEY_PATH}")

if [[ -n "${SITEGROUND_SSH_PASSPHRASE:-}" ]]; then
  eval "$(ssh-agent -s)" >/dev/null
  STARTED_SSH_AGENT="1"
  TMP_ASKPASS_FILE="$(mktemp)"
  cat > "${TMP_ASKPASS_FILE}" <<'ASKPASS'
#!/usr/bin/env bash
printf '%s\n' "${SITEGROUND_SSH_PASSPHRASE}"
ASKPASS
  chmod 700 "${TMP_ASKPASS_FILE}"
  export SITEGROUND_SSH_PASSPHRASE
  DISPLAY="${DISPLAY:-:0}" SSH_ASKPASS="${TMP_ASKPASS_FILE}" SSH_ASKPASS_REQUIRE=force ssh-add "${SSH_KEY_PATH}" </dev/null >/dev/null
fi

echo "Deploying Peptide Protocol to SiteGround..."

rsync -avz --delete \
  --exclude ".git/" \
  --exclude ".github/" \
  --exclude ".DS_Store" \
  --exclude ".env" \
  --exclude ".env.example" \
  --exclude "DEPLOYMENT.md" \
  --exclude "*.md" \
  --exclude "comp/" \
  --exclude "drafts/" \
  --exclude "transfer/" \
  --exclude "launch-package/" \
  --exclude "launch-package-clean-2/" \
  --exclude "repo-upload/" \
  --exclude "peptideprotocol-site-content.md" \
  --exclude "*.zip" \
  --exclude "assets/*.pdf" \
  --exclude "assets/ChatGPT Image*.png" \
  --exclude "assets/Peptide Protocol*.png" \
  --exclude "assets/couple render.png" \
  --exclude "assets/hero-generated 1.png" \
  --exclude "assets/hero-generated.jpg" \
  --exclude "assets/icon *.png" \
  --exclude "assets/icon-*.png" \
  --exclude "assets/icon-*.svg" \
  --exclude "assets/logo-coral.png" \
  --exclude "assets/logo-knockout.svg" \
  --exclude "assets/needles.png" \
  -e "ssh ${SSH_OPTS[*]}" \
  "${ROOT_DIR}/" \
  "${SITEGROUND_SSH_USER}@${SITEGROUND_SSH_HOST}:${SITEGROUND_REMOTE_PATH}"

echo "Deploy complete."
