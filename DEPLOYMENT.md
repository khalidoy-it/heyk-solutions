# GitHub Pages Deployment Guide with Custom Domain

Complete guide to deploy your Heyk-Solutions website to GitHub Pages and connect your custom domain.

## Prerequisites

- A GitHub account
- A custom domain name (already purchased)
- Access to your domain registrar's DNS settings

## Step 1: Prepare Your Repository

### Option A: Create a New Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `heyk-solutions` (or your preferred name)
4. Description: "Professional website for Heyk-Solutions digital agency"
5. Visibility: **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click **Create repository**

### Option B: Use Existing Repository

If you already have a repository, make sure it's public.

## Step 2: Upload Your Files

### Using GitHub Web Interface

1. Navigate to your repository on GitHub
2. Click **"uploading an existing file"** or drag and drop
3. Upload all files:
   - `index.html` (main page)
   - `profil.jpeg` (CEO profile image)
   - `.nojekyll` (important - prevents Jekyll processing)
   - `sitemap.xml`
   - `robots.txt`
   - Any other assets

4. Scroll down and commit with message: `Initial commit - Heyk-Solutions website`
5. Click **Commit changes**

### Using Git Command Line

```bash
# Navigate to your project directory
cd path/to/heyksolutions

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Heyk-Solutions website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/heyk-solutions.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**:
   - Branch: Select `main` (or `master` if that's your default branch)
   - Folder: Select `/ (root)`
5. Click **Save**

6. Your site will be live at: `https://YOUR_USERNAME.github.io/heyk-solutions/`
   - ⚠️ It may take a few minutes to become available

## Step 4: Configure Custom Domain

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
   
   ⚠️ **Important**: Only put the domain name, nothing else. No `http://` or `https://` or trailing slashes.

4. Commit the file: `Add CNAME for custom domain`

### Step 4.2: Configure DNS at Your Domain Registrar

You need to add DNS records at your domain registrar (where you bought the domain - GoDaddy, Namecheap, Google Domains, etc.).

#### Option 1: Use Apex Domain (yourdomain.com - no www)

Add these **A Records** (IPv4 addresses for GitHub Pages):

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| A | @ | `185.199.108.153` | 3600 |
| A | @ | `185.199.109.153` | 3600 |
| A | @ | `185.199.110.153` | 3600 |
| A | @ | `185.199.111.153` | 3600 |

Or add these **AAAA Records** (IPv6):

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| AAAA | @ | `2606:50c0:8000::153` | 3600 |
| AAAA | @ | `2606:50c0:8001::153` | 3600 |

#### Option 2: Use www Subdomain (www.yourdomain.com)

Add this **CNAME Record**:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | www | `YOUR_USERNAME.github.io` | 3600 |

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Option 3: Use Both (Recommended)

Add all the A records from Option 1 **AND** the CNAME record from Option 2. This allows both `yourdomain.com` and `www.yourdomain.com` to work.

### Step 4.3: Enable HTTPS (Automatic)

1. Go back to repository **Settings** → **Pages**
2. Under **Custom domain**, you should see your domain listed
3. Check **"Enforce HTTPS"** (this option appears after DNS propagates - may take up to 24 hours)
4. Once checked, your site will be accessible via `https://yourdomain.com`

## Step 5: Update Your Website for Custom Domain

Update the canonical URLs and meta tags in `index.html` to use your custom domain:

1. Edit `index.html`
2. Search for `heyk-solutions.github.io` and replace with `yourdomain.com`
3. Update these sections:
   - `<link rel="canonical" href="...">`
   - Open Graph `og:url` tags
   - Schema.org JSON-LD `url` fields
   - Any hardcoded URLs

## Step 6: Verify Deployment

### Check GitHub Pages Status

1. Repository **Settings** → **Pages**
2. You should see:
   - ✅ **Source**: Deployed from `main` branch
   - ✅ **Custom domain**: `yourdomain.com` (with checkmark if configured correctly)
   - ✅ **Enforce HTTPS**: Checked (after DNS propagation)

### Test Your Domain

1. Wait 5-60 minutes for DNS to propagate (can take up to 24 hours)
2. Visit `https://yourdomain.com`
3. Test `https://www.yourdomain.com` if configured
4. Check that HTTPS redirect works correctly

### Troubleshooting DNS

Use these tools to verify DNS propagation:

- [whatsmydns.net](https://www.whatsmydns.net) - Check DNS propagation globally
- [dnschecker.org](https://dnschecker.org) - Verify A and CNAME records
- Command line: `nslookup yourdomain.com` or `dig yourdomain.com`

## Common Issues & Solutions

### Issue: "Site can't be reached" or "DNS_PROBE_FINISHED_NXDOMAIN"

**Solution:**
- Wait longer (DNS can take up to 24 hours)
- Verify A records or CNAME are correct
- Check TTL value (should be 3600 or less)
- Ensure CNAME file has correct domain (no www if using apex)

### Issue: Domain shows "Not yet provisioned" in GitHub Pages

**Solution:**
- Wait 5-10 minutes after adding CNAME file
- Verify CNAME file format (only domain name, no protocol)
- Check repository is public
- Verify GitHub Pages is enabled

### Issue: HTTPS not available / "Enforce HTTPS" is grayed out

**Solution:**
- Wait for DNS to fully propagate (can take 24 hours)
- Verify A records point to correct GitHub IPs
- Ensure CNAME file exists with correct domain
- Remove and re-add CNAME file if needed

### Issue: Mixed content warnings (HTTP/HTTPS)

**Solution:**
- Update all image URLs to use HTTPS
- Update all external links to use HTTPS
- Check browser console for specific mixed content errors

### Issue: 404 Error after domain setup

**Solution:**
- Ensure `index.html` is in the root of your repository
- Verify `.nojekyll` file exists
- Check that GitHub Pages source is set to `/ (root)`
- Clear browser cache

## Updating Your Website

After deployment, to update your site:

```bash
# Make changes to your files locally
# Then commit and push:

git add .
git commit -m "Update website content"
git push origin main
```

Changes will be live in 1-2 minutes.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)

## Quick Checklist

- [ ] Repository created and files uploaded
- [ ] GitHub Pages enabled
- [ ] CNAME file created with your domain
- [ ] DNS A records or CNAME configured
- [ ] Domain verified in GitHub Pages settings
- [ ] HTTPS enforced
- [ ] Website loads at your custom domain
- [ ] All URLs updated in HTML files
- [ ] Tested on mobile and desktop

---

**Need Help?** Contact support or check GitHub Pages documentation.
