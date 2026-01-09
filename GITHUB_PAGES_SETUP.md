# GitHub Pages Deployment with Custom Domain - Quick Guide

Complete step-by-step guide to deploy your website to GitHub Pages and connect your custom domain.

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `heyk-solutions` (or your preferred name)
4. Description: "Professional website for Heyk-Solutions digital agency"
5. Visibility: **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README"
7. Click **Create repository**

## Step 2: Push Your Code to GitHub

### Option A: Using GitHub Desktop (Easiest)
1. Download [GitHub Desktop](https://desktop.github.com)
2. File → Add Local Repository
3. Select your `heyksolutions` folder
4. Click **Publish repository**
5. Choose your repository name
6. Click **Publish**

### Option B: Using Command Line

Open PowerShell or Terminal in your project folder and run:

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/heyk-solutions.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you get authentication errors:**
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop (easier)

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

6. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/heyk-solutions/
   ```
   ⚠️ It may take 2-5 minutes to become available

## Step 4: Set Up Custom Domain

### Step 4.1: Create CNAME File

1. In your repository, click **"Add file"** → **"Create new file"**
2. File name: `CNAME` (all caps, no extension)
3. In the file content, enter **only** your domain name:
   ```
   yourdomain.com
   ```
   Or if you want www:
   ```
   www.yourdomain.com
   ```
   
   ⚠️ **Important**: 
   - Only the domain name, nothing else
   - No `http://` or `https://`
   - No trailing slashes
   - No quotes

4. Click **Commit new file**

### Step 4.2: Configure DNS at Your Domain Registrar

Go to where you bought your domain (GoDaddy, Namecheap, Google Domains, etc.) and add DNS records:

#### For Apex Domain (yourdomain.com - no www):

Add these **4 A Records**:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| A | @ | `185.199.108.153` | 3600 |
| A | @ | `185.199.109.153` | 3600 |
| A | @ | `185.199.110.153` | 3600 |
| A | @ | `185.199.111.153` | 3600 |

#### For www Subdomain (www.yourdomain.com):

Add this **CNAME Record**:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | www | `YOUR_USERNAME.github.io` | 3600 |

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Recommended: Use Both (Apex + www)

Add all 4 A records **AND** the CNAME record. This allows both:
- `yourdomain.com` ✅
- `www.yourdomain.com` ✅

### Step 4.3: Enable HTTPS

1. Go back to repository **Settings** → **Pages**
2. Under **Custom domain**, you should see your domain listed
3. Wait 5-60 minutes for DNS to propagate
4. Check **"Enforce HTTPS"** (this option appears after DNS is verified)
5. Once checked, your site will be accessible via `https://yourdomain.com`

## Step 5: Update Website URLs

Update your website to use your custom domain:

1. Edit `index.html`
2. Find and replace `heyk-solutions.github.io` with `yourdomain.com`:
   - Line 9: Canonical URL
   - Line 13: Open Graph URL
   - Line 136: Schema.org URL
   - Any other hardcoded URLs

## Step 6: Verify Everything Works

### Check GitHub Pages Status:
- ✅ **Source**: Deployed from `main` branch
- ✅ **Custom domain**: `yourdomain.com` (with checkmark)
- ✅ **Enforce HTTPS**: Checked

### Test Your Domain:
1. Wait 5-60 minutes for DNS propagation (can take up to 24 hours)
2. Visit `https://yourdomain.com`
3. Test `https://www.yourdomain.com` (if configured)
4. Verify HTTPS redirect works

### Verify DNS:
Use these tools to check DNS:
- [whatsmydns.net](https://www.whatsmydns.net) - Check global DNS propagation
- [dnschecker.org](https://dnschecker.org) - Verify A and CNAME records

## Troubleshooting

### Issue: "Site can't be reached"
- Wait longer (DNS can take 24 hours)
- Verify A records point to correct GitHub IPs
- Check CNAME file has correct domain

### Issue: HTTPS not available
- Wait for DNS to fully propagate
- Verify A records are correct
- Remove and re-add CNAME file if needed

### Issue: Domain shows "Not yet provisioned"
- Wait 5-10 minutes after adding CNAME
- Verify CNAME file format (only domain name)
- Check repository is public

## Updating Your Website

After deployment, to update your site:

```bash
# Make changes to your files
git add .
git commit -m "Update website content"
git push origin main
```

Changes will be live in 1-2 minutes.

## Quick Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] CNAME file created with your domain
- [ ] DNS A records configured (4 records)
- [ ] DNS CNAME record configured (for www)
- [ ] Domain verified in GitHub Pages settings
- [ ] HTTPS enforced
- [ ] Website loads at your custom domain
- [ ] URLs updated in HTML files

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- See also: [DEPLOYMENT.md](./DEPLOYMENT.md) for more detailed instructions

---

**Your website will be live at:** `https://yourdomain.com` 🚀
