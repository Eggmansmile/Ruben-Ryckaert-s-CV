# Security Guide

This guide helps protect sensitive information in your project.

---

## 🔐 What Should Be Hidden

### ❌ NEVER Commit These
- `.env` files (API keys, passwords, secrets)
- Database credentials
- Private SSH keys
- OAuth tokens
- Gmail app passwords
- API keys from any service
- Database connection strings with passwords
- Private keys, certificates
- Temporary secret files

### ✅ Safe to Commit
- `.env.example` (template with fake values)
- Code files
- Configuration files without secrets
- Documentation
- Package dependencies

---

## 📝 .gitignore Setup

Your `.gitignore` file is configured to hide:

```
# Environment files
.env
.env.local
.env.*.local
.env.production
.env.development

# Secrets
secrets.json

# SSL Certificates
*.pem
*.key
*.crt

# Databases
*.db
*.sqlite
*.sqlite3

# And more...
```

**Important:** If you add new sensitive files, add them to `.gitignore` BEFORE committing!

---

## 🚨 Oops! I Already Committed Secrets

If you accidentally committed `.env` or other secrets:

### Step 1: Remove from Git History

```bash
# Option A: Remove from recent commits (if just committed)
git reset HEAD~1 .env
git checkout -- .env
git commit --amend -m "Remove .env from commit"

# Option B: Remove completely from history (advanced)
# Using BFG Repo Cleaner (recommended)
brew install bfg
bfg --delete-files .env
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force

# Or using git-filter-branch (slower)
git filter-branch --tree-filter 'rm -f .env' -- --all
```

### Step 2: Notify Service Providers

✅ If Gmail app password was exposed:
- Go to https://myaccount.google.com/apppasswords
- Delete the old password
- Generate a new one
- Update your `.env` on server

✅ If other API keys were exposed:
- Regenerate or revoke them immediately
- Update on your server
- Monitor for suspicious activity

### Step 3: Do Not Panic

- Credentials in public repos are scanned automatically
- GitHub has alerts for common secret patterns
- Act quickly but calmly
- GitHub will ask you to regenerate secrets

---

## ✅ Secure Setup Checklist

### Local Machine
- [ ] Never commit `.env` file
- [ ] Add sensitive files to `.gitignore`
- [ ] Use `.env.example` for templates
- [ ] Store secrets locally in `.env`
- [ ] Review files before `git push`

### GitHub
- [ ] Verify no `.env` in repo
- [ ] Check commit history for secrets
- [ ] Enable GitHub security alerts
- [ ] Review security warnings
- [ ] Use GitHub Secrets for CI/CD

### Server
- [ ] Create `.env` file on server ONLY
- [ ] Use correct permissions (600)
- [ ] Never share .env contents
- [ ] Rotate credentials regularly
- [ ] Monitor access logs

### Git Configuration
- [ ] Configure `.gitignore` properly
- [ ] Use `.env.example` template
- [ ] Document setup requirements
- [ ] Review before every commit

---

## 📋 Workflow: Adding a New Secret

### 1. Create .env.example (No Real Secrets!)
```bash
# .env.example
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
API_KEY=your-api-key-here
```

### 2. Create Local .env (Real Secrets)
```bash
# .env (NOT committed)
SMTP_USER=ruben.ryckaert89@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
API_KEY=sk_test_abc123xyz
```

### 3. Add to .gitignore
```bash
# .gitignore
.env          # ✅ Hidden
.env.local    # ✅ Hidden
```

### 4. Commit Only .env.example
```bash
git add .env.example
git add .gitignore
git commit -m "Add environment variable templates"
git push
```

### 5. Server Setup
```bash
# On server (manually, NOT from repo)
cd /opt/portfolio-backend
nano .env
# Paste real credentials
# Ctrl+X, Y, Enter
```

---

## 🔍 Check for Exposed Secrets

### Before Committing
```bash
# Review changes
git diff
git diff --cached

# Look for: passwords, tokens, keys, api keys
# If found: DON'T COMMIT!
```

### After Pushing
```bash
# Search GitHub repo for secrets
# Go to: https://github.com/Eggmansmile/Ruben-Ryckaert-s-CV
# Settings → Security → Code security and analysis
```

### Tools to Scan
- **git-secrets** - Prevents committing secrets
  ```bash
  brew install git-secrets
  git secrets --install
  git secrets --register-aws
  ```

- **TruffleHog** - Scans Git history
  ```bash
  pip install truffleHog
  trufflehog github --repo https://github.com/Eggmansmile/Ruben-Ryckaert-s-CV
  ```

---

## 🔑 Environment Variable Best Practices

### ✅ DO
- Use `.env.example` templates
- Rotate secrets periodically
- Use strong, unique passwords
- Document required variables
- Use 2FA on accounts with credentials
- Keep `.env` locally only
- Add to `.gitignore` first
- Review changes before pushing

### ❌ DON'T
- Commit `.env` files
- Share credentials via chat/email
- Use weak passwords
- Keep same secrets forever
- Leave credentials in code
- Post screenshots with credentials
- Use credentials in test data
- Email `.env` files

---

## 🚨 GitHub Security Features

### Enable Secret Scanning
1. Go to Settings → Security
2. Enable "Secret scanning"
3. Enable "Push protection"

### GitHub Alerts
- Automatically scans commits
- Detects known secret patterns
- Alerts you immediately
- Suggests regeneration

### For CI/CD (if using)
```yaml
# .github/workflows/deploy.yml
env:
  SMTP_USER: ${{ secrets.SMTP_USER }}
  SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}
```

Set secrets in: Settings → Secrets and Variables → Actions

---

## 📱 Current Project Security Status

✅ `.gitignore` configured  
✅ `.env.example` provided  
✅ No hardcoded secrets in code  
✅ Environment variables documented  
✅ Server-side `.env` setup documented  
⚠️ Review commit history for .env file  

---

## 🆘 Emergency: Exposed Credentials

If you suspect credentials are exposed:

1. **STOP** - Don't panic
2. **ASSESS** - What was exposed?
3. **REGENERATE** - New credentials immediately
   - Gmail: Generate new app password
   - API Keys: Regenerate or revoke
   - Tokens: Issue new ones
4. **CLEAN** - Remove from Git history (see section above)
5. **UPDATE** - Update server with new credentials
6. **MONITOR** - Watch for suspicious activity

---

## 📚 Resources

- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [OWASP Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [12 Factor App - Config](https://12factor.net/config)
- [Git Docs - gitignore](https://git-scm.com/docs/gitignore)

---

## ✨ Summary

**The Golden Rule:** If it's a secret, it shouldn't be in version control.

- Use `.env` locally
- Commit `.env.example` with template
- Add to `.gitignore` before committing
- Set real values on server manually
- Rotate credentials regularly
- Monitor for exposure

**Your project is now more secure!** 🔐
