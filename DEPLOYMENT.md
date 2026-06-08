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

This environment still cannot create a local `.git` folder, so the first push needs to happen either:

- from your Mac terminal, or
- by uploading the files into the GitHub repo in the browser

Suggested local setup:

```bash
git init
git remote add origin https://github.com/alpharomeo-black/peptideprotocol-ca.git
git add .
git commit -m "Initial Peptide Protocol site"
git branch -M main
git push -u origin main
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
- `SITEGROUND_SSH_PASSPHRASE`
- `SITEGROUND_REMOTE_PATH`

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

## Remaining polish after pipeline setup

- hero slider sizing and slide imagery
- unique feature images for each article
- final live QA on desktop and mobile
