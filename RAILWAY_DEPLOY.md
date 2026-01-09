# Deploy to Railway - Quick Guide

Railway is a modern cloud platform that makes it easy to deploy static websites and applications.

## Step 1: Sign Up for Railway

1. Go to [railway.app](https://railway.app)
2. Click **"Start a New Project"** or **"Login"**
3. Choose **"Login with GitHub"** (recommended)
4. Authorize Railway to access your GitHub account

## Step 2: Create a New Project

1. After signing in, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Find and select your **`heyk-solutions`** repository
4. Click **"Deploy Now"**

## Step 3: Configure for Static Site

Railway will auto-detect your project. For a static HTML site:

1. Click on your project to open it
2. Go to **"Settings"** tab
3. Scroll to **"Build & Deploy"** section
4. Configure:
   - **Build Command:** Leave empty (no build needed for static HTML)
   - **Start Command:** Leave empty
   - **Output Directory:** Leave empty or `./`
   - **Root Directory:** `./` (default)

## Step 4: Add Static Site Configuration (Optional but Recommended)

Railway will automatically serve your static files, but you can add a `railway.json` for better control:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npx serve -s . -l $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

Or create a simple `package.json`:

```json
{
  "name": "heyk-solutions",
  "version": "1.0.0",
  "scripts": {
    "start": "npx serve -s . -l $PORT"
  }
}
```

## Step 5: Generate Domain

1. Go to your project dashboard
2. Click on the **"Settings"** tab
3. Scroll to **"Domains"** section
4. Click **"Generate Domain"**
5. Railway will create a domain like: `heyk-solutions-production.up.railway.app`
6. Your site is now live! 🎉

## Step 6: Add Custom Domain (Optional)

1. In the **"Domains"** section, click **"Custom Domain"**
2. Enter your domain name (e.g., `yourdomain.com`)
3. Railway will show you DNS records to add:
   - Add a **CNAME** record pointing to your Railway domain
   - Or add **A** records (Railway will provide IPs)
4. Railway will automatically provision SSL/HTTPS

## Step 7: Automatic Deployments

- Every time you push to GitHub, Railway automatically redeploys
- You can see deployment logs in real-time
- Production deployments are instant

## Step 8: Environment Variables (If Needed)

If you need environment variables (like API keys):

1. Go to **"Variables"** tab
2. Click **"New Variable"**
3. Add your key-value pairs
4. They'll be available in your application

## Benefits

✅ **Free tier** available (with usage limits)  
✅ **Automatic HTTPS**  
✅ **Global CDN**  
✅ **Auto-deploy** from GitHub  
✅ **Custom domains**  
✅ **Real-time logs**  
✅ **Easy scaling**  

## Pricing

- **Free tier:** $5 credit/month (usually enough for static sites)
- **Hobby plan:** $5/month (if you exceed free tier)
- Static sites are very lightweight and usually stay within free tier

## Troubleshooting

### If your site doesn't load:
1. Check **"Deployments"** tab for build logs
2. Make sure `index.html` is in the root directory
3. Verify the build command is empty (for static sites)

### If you need a web server:
Railway can use `serve` or `http-server`:
- Add to `package.json`: `"start": "npx serve -s . -l $PORT"`
- Railway will automatically install and run it

---

**Your site will be live at:** `https://heyk-solutions-production.up.railway.app` (or your custom domain)
