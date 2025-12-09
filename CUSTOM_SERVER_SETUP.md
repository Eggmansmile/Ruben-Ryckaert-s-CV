# Deploy Backend to Your Own Server

## 🏗️ Architecture

```
Frontend: GitHub Pages
  ↓
  https://eggmansmile.github.io/Ruben-Ryckaert-s-CV/

Backend: Your Server
  ↓
  http://your-server-ip:3001/api/send-email
```

---

## 🚀 Step 1: Setup Backend on Server

### Connect to your server:
```bash
ssh user@your-server-ip
```

### Create directory:
```bash
sudo mkdir -p /opt/portfolio-backend
cd /opt/portfolio-backend
```

### Clone repository:
```bash
git clone https://github.com/Eggmansmile/Ruben-Ryckaert-s-CV.git .
```

### Install Node.js (if not installed):
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install dependencies:
```bash
npm install
```

---

## 🔐 Step 2: Add Environment Variables

### Create .env file:
```bash
nano .env
```

### Paste your credentials:
```env
SMTP_SERVICE=gmail
SMTP_USER=ruben.ryckaert89@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
RECIPIENT_EMAIL=ruben.ryckaert89@gmail.com
PORT=3001
NODE_ENV=production
```

### Save (Ctrl+X, then Y, then Enter)

---

## 🎯 Step 3: Start Backend with PM2 (Keep Running)

### Install PM2 globally:
```bash
sudo npm install -g pm2
```

### Start your backend:
```bash
pm2 start server.js --name "portfolio-api"
```

### Set to auto-start on reboot:
```bash
pm2 startup
pm2 save
```

### Check status:
```bash
pm2 monit
```

---

## 🔗 Step 4: Update Frontend

### Edit Contact.tsx:

Replace:
```typescript
const backendUrl = 'http://your-server-ip:3001/api/send-email';
```

With your actual server details:
- **If using IP**: `http://123.45.67.89:3001/api/send-email`
- **If using domain**: `https://your-domain.com:3001/api/send-email`
- **If using domain with Nginx**: `https://your-domain.com/api/send-email`

### Push to GitHub:
```bash
git add components/Contact.tsx
git commit -m "Update backend URL"
git push
```

Frontend auto-deploys on GitHub Pages! ✅

---

## 🧪 Step 5: Test

### Test backend directly:
```bash
curl -X POST http://your-server-ip:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

### Test from frontend:
1. Visit your deployed site
2. Fill contact form
3. Submit
4. Check email ✅

---

## 🔒 Security Tips

- [ ] Use HTTPS (get SSL cert from Let's Encrypt)
- [ ] Close unnecessary ports (only open 80, 443)
- [ ] Use firewall rules
- [ ] Run Node as non-root user
- [ ] Never commit .env file
- [ ] Use strong passwords
- [ ] Keep server updated: `sudo apt update && sudo apt upgrade`

---

## 🛠️ Useful Commands

### Monitor backend:
```bash
pm2 monit
```

### View logs:
```bash
pm2 logs portfolio-api
```

### Restart:
```bash
pm2 restart portfolio-api
```

### Stop:
```bash
pm2 stop portfolio-api
```

### Update code from GitHub:
```bash
cd /opt/portfolio-backend
git pull origin main
npm install
pm2 restart portfolio-api
```

---

## 🔗 Optional: Setup Nginx Reverse Proxy

For a cleaner URL without port number:

### Install Nginx:
```bash
sudo apt-get install nginx
```

### Create config:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

### Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Update Contact.tsx:
```typescript
const backendUrl = 'https://your-domain.com/api/send-email';
```

---

## ✅ Summary

✓ Backend running on your server  
✓ Frontend on GitHub Pages  
✓ Auto-restart with PM2  
✓ Production ready  
✓ Full control  

**Your site is now live!** 🎉
