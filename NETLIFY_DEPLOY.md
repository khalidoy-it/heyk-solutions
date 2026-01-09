# Deploy to Netlify - Quick Guide

Netlify is another excellent free hosting option for static websites with GitHub integration.

## Step 1: Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"** (recommended)
4. Authorize Netlify to access your GitHub account

## Step 2: Deploy Your Project

1. After signing in, click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your **`heyk-solutions`** repository
4. Click **"Deploy site"**
5. **Build settings** (usually auto-detected):
   - **Build command:** Leave empty (no build needed)
   - **Publish directory:** Leave empty or `./`
6. Click **"Deploy site"**

## Step 3: Your Site is Live!

- Netlify will deploy your site in ~30 seconds
- You'll get a URL like: `heyk-solutions.netlify.app`
- Your site is now live! 🎉

## Step 4: Add Custom Domain (Optional)

1. Go to **"Site settings"** → **"Domain management"**
2. Click **"Add custom domain"**
3. Enter your domain name (e.g., `yourdomain.com`)
4. Follow the DNS instructions:
   - For **apex domain** (`yourdomain.com`): Add A records
   - For **www** (`www.yourdomain.com`): Add CNAME to `yourdomain.netlify.app`
5. Netlify will automatically provision SSL/HTTPS (can take a few minutes)

## Step 5: Automatic Deployments

- Every time you push to GitHub, Netlify automatically redeploys
- You get deploy previews for pull requests
- Production deployments are instant

## Benefits

✅ **Free** for personal projects  
✅ **Automatic HTTPS**  
✅ **Global CDN** (fast worldwide)  
✅ **Auto-deploy** from GitHub  
✅ **Custom domains**  
✅ **Deploy previews** for pull requests  
✅ **Form handling** (if you need it later)  

---

**Your site will be live at:** `https://heyk-solutions.netlify.app` (or your custom domain)
