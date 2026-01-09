# Backend Setup Guide for Contact Form

The contact form is currently configured to work with **FormSubmit** (free service, no setup required). For a custom backend, follow one of the options below:

## Option 1: FormSubmit (Current - No Setup Required) ✅

The form is already configured to use FormSubmit. Just verify your email in the form action:
- Form action: `https://formsubmit.co/hello@heyk-solutions.com`
- No backend setup needed
- Free and works immediately
- Visit https://formsubmit.co to verify email (optional)

**Status**: Already configured and working!

## Option 2: Vercel Serverless Function

### Setup Steps:

1. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Install Dependencies** (if using email service):
   ```bash
   npm install resend
   # or
   npm install @sendgrid/mail
   ```

3. **Add Environment Variables**:
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add `RESEND_API_KEY` or `SENDGRID_API_KEY`

4. **Update `api/contact.js`**:
   - Uncomment and configure your email service
   - Update email addresses

5. **The function will be available at**: `https://your-domain.vercel.app/api/contact`

## Option 3: Netlify Functions

### Setup Steps:

1. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Build command: (none needed for static site)
   - Publish directory: `/` (root)

2. **Install Dependencies**:
   ```bash
   npm install @sendgrid/mail
   ```

3. **Add Environment Variables**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add `SENDGRID_API_KEY`

4. **Update `netlify/functions/contact.js`**:
   - Uncomment and configure SendGrid code
   - Update email addresses

5. **The function will be available at**: `https://your-domain.netlify.app/api/contact`

## Option 4: AWS Lambda (Advanced)

1. **Create Lambda Function**:
   - Use Node.js 18.x runtime
   - Copy code from `api/contact.js`

2. **Set up API Gateway**:
   - Create REST API
   - Configure CORS
   - Connect to Lambda function

3. **Add Environment Variables**:
   - Add email service API keys

4. **Update form action in `index.html`**:
   - Change to your API Gateway endpoint

## Recommended Email Services:

### Resend (Easiest)
- **Sign up**: https://resend.com
- **Free tier**: 3,000 emails/month
- **API**: Simple and modern

### SendGrid
- **Sign up**: https://sendgrid.com
- **Free tier**: 100 emails/day
- **API**: Well-documented

### Mailgun
- **Sign up**: https://mailgun.com
- **Free tier**: 5,000 emails/month (first 3 months)
- **API**: Powerful features

### AWS SES
- **Sign up**: https://aws.amazon.com/ses
- **Free tier**: 62,000 emails/month (if EC2 hosted)
- **Cost**: Very low after free tier

## Current Configuration

The form is currently using **FormSubmit** which:
- ✅ Works immediately (no setup)
- ✅ Free
- ✅ No backend required
- ✅ Handles spam protection
- ✅ Supports custom redirects

**To change email address**: Update the form action in `index.html` line 788:
```html
<form ... action="https://formsubmit.co/YOUR_EMAIL_HERE" ...>
```

## Testing

1. **Test with FormSubmit**: Submit the form - you should receive emails immediately
2. **Test custom backend**: Update form action, test submission
3. **Check console**: Browser dev tools for any errors

## Security Notes

- Always validate input on the backend
- Use environment variables for API keys (never commit them)
- Enable CORS only for your domain in production
- Consider adding rate limiting for production
- Use CAPTCHA for spam protection (optional)
