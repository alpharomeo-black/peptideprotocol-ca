# Deployment Notes

## Preferred flow

This project should use one clean path:

1. Edit files locally
2. Push to GitHub
3. GitHub Actions deploys to SiteGround over SSH
4. SiteGround serves the updated files from `public_html`

Do not keep editing SiteGround manually once this is connected.

## Repository

- GitHub repo: `https://github.com/alpharomeo-black/peptideprotocol-ca.git`
- Default branch: `main`

This repo is already connected to GitHub. The day-to-day flow is now:

```bash
git add .
git commit -m "Describe the change"
git push
```

## SiteGround deploy target

- SSH host: `ssh.peptideprotocol.ca`
- SSH port: `18765`
- SSH user: `u3401-ut86uow1vwuj`
- Remote path: `/home/customer/www/peptideprotocol.ca/public_html/`

The remote path follows SiteGround's standard shared-hosting layout and matches the live domain currently being served from `public_html`.

## GitHub secrets to add

Add these repository secrets before enabling auto-deploy:

- `SITEGROUND_SSH_HOST`
- `SITEGROUND_SSH_PORT`
- `SITEGROUND_SSH_USER`
- `SITEGROUND_SSH_PRIVATE_KEY`
- `SITEGROUND_SSH_PASSPHRASE` if the saved key is encrypted
- `SITEGROUND_REMOTE_PATH`

`SITEGROUND_SSH_PRIVATE_KEY` should be the full OpenSSH private key used for SiteGround deploy access. If that key is encrypted, also save `SITEGROUND_SSH_PASSPHRASE` and the workflow will unlock it before deploy.

## What the workflow deploys

The deploy workflow should publish only the live site files:

- `index.html`
- `about.html`
- `articles.html`
- `what-is-a-protocol.html`
- `reconstitution-without-guesswork.html`
- `recovery-repair-performance-stacking.html`
- `storage-scheduling-routine.html`
- `assets/`
- `scripts/`
- `styles/`

It should not publish local notes, uploads, or setup helpers such as:

- `repo-upload/`
- `peptideprotocol-site-content.md`
- `.env`
- `.github/`

## Remaining polish after pipeline setup

- hero slider sizing and slide imagery
- unique feature images for each article
- final live QA on desktop and mobile
