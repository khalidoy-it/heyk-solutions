# Deploy to Vercel - Quick Guide

Vercel is the easiest way to deploy your static website. It's free and connects directly to your GitHub repository.

## Step 1: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

## Step 2: Deploy Your Project

1. After signing in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories listed
3. Find **`heyk-solutions`** and click **"Import"**
4. Vercel will auto-detect it's a static site
5. **Project Settings:**
   - **Framework Preset:** Other (or leave default)
   - **Root Directory:** `./` (default)
   - **Build Command:** Leave empty (no build needed for static HTML)
   - **Output Directory:** Leave empty
6. Click **"Deploy"**

## Step 3: Your Site is Live!

- Vercel will deploy your site in ~30 seconds
- You'll get a URL like: `heyk-solutions.vercel.app`
- Your site is now live! 🎉

## Step 4: Add Custom Domain (Optional)

1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name (e.g., `yourdomain.com`)
4. Follow the DNS instructions:
   - Add a **CNAME** record pointing to `cname.vercel-dns.com`
   - Or add **A** records (Vercel will show you the IPs)
5. Vercel will automatically provision SSL/HTTPS

## Step 5: Automatic Deployments

- Every time you push to GitHub, Vercel automatically redeploys
- You get preview URLs for every commit
- Production deployments are instant

## Benefits

✅ **Free** for personal projects  
✅ **Automatic HTTPS**  
✅ **Global CDN** (fast worldwide)  
✅ **Auto-deploy** from GitHub  
✅ **Custom domains**  
✅ **Preview deployments** for every commit  

---

**Your site will be live at:** `https://heyk-solutions.vercel.app` (or your custom domain)
