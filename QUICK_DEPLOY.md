# 🚀 Quick Deploy to GitHub Pages with Custom Domain

## ✅ Step 1: Push to GitHub (Choose One Method)

### Method A: Using GitHub Desktop (Recommended - Easiest)

1. **Download GitHub Desktop**: https://desktop.github.com
2. **Install and sign in** with your GitHub account
3. **File** → **Add Local Repository**
4. **Browse** to: `C:\Users\desktop\Desktop\heyksolutions`
5. Click **Publish repository**
6. **Name**: `heyk-solutions` (or your choice)
7. **Description**: "Heyk-Solutions professional website"
8. **Make sure "Keep this code private" is UNCHECKED** (must be public for free Pages)
9. Click **Publish repository**

✅ Done! Your code is now on GitHub.

### Method B: Using Command Line

**First, create the repository on GitHub:**
1. Go to https://github.com/new
2. Repository name: `heyk-solutions`
3. Make it **Public**
4. **DO NOT** initialize with README
5. Click **Create repository**

**Then run these commands in PowerShell:**

```powershell
# Navigate to your project (if not already there)
cd C:\Users\desktop\Desktop\heyksolutions

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/heyk-solutions.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you get authentication errors:**
- Use a **Personal Access Token** instead of password
- Create token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Or use **GitHub Desktop** (Method A) - much easier!

## ✅ Step 2: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/heyk-solutions`
2. Click **Settings** tab (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
5. Click **Save**

6. Your site is now live at:
   ```
   https://YOUR_USERNAME.github.io/heyk-solutions/
   ```
   ⏱️ Wait 2-5 minutes for it to appear

## ✅ Step 3: Add Custom Domain

### 3.1: Create CNAME File

1. In your GitHub repository, click **"Add file"** → **"Create new file"**
2. **File name**: `CNAME` (all caps, no extension)
3. **File content**: Enter **only** your domain:
   ```
   yourdomain.com
   ```
   (Replace `yourdomain.com` with your actual domain)
4. Click **"Commit new file"**

### 3.2: Configure DNS

Go to your domain registrar (where you bought the domain) and add:

#### Add 4 A Records (for yourdomain.com):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

#### Add 1 CNAME Record (for www.yourdomain.com):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

(Replace `YOUR_USERNAME` with your GitHub username)

### 3.3: Enable HTTPS

1. Go back to **Settings** → **Pages**
2. Wait 5-60 minutes for DNS to propagate
3. Check **"Enforce HTTPS"** (appears after DNS is verified)
4. Your site will be at: `https://yourdomain.com` ✅

## ✅ Step 4: Update Website URLs

1. Edit `index.html` in GitHub (or locally and push)
2. Replace `heyk-solutions.github.io` with `yourdomain.com`:
   - Line 9: `<link rel="canonical" href="...">`
   - Line 13: `<meta property="og:url" content="...">`
   - Line 136: Schema.org `"url"` field

## 📋 Quick Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] CNAME file created
- [ ] DNS A records added (4 records)
- [ ] DNS CNAME record added
- [ ] HTTPS enabled
- [ ] Website loads at your domain

## 🎉 You're Done!

Your website is now live at: **https://yourdomain.com**

For detailed instructions, see: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
