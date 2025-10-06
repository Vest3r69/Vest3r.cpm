# Deploy to Vest3r.com - Step by Step Guide

## Method 1: Direct Upload to Cloudflare Pages (Easiest)

### Step 1: Prepare Your Files
1. Make sure all files are in one folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `_headers`
   - `_redirects`

### Step 2: Upload to Cloudflare Pages
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Choose "Upload assets" (not Git)
4. Drag and drop your folder or select all files
5. Click "Deploy site"

### Step 3: Connect Your Domain
1. After deployment, go to your project dashboard
2. Click "Custom domains" in the left sidebar
3. Click "Set up a custom domain"
4. Enter `vest3r.com` (without www)
5. Click "Continue"

### Step 4: Update DNS Records
1. Cloudflare will show you DNS records to add
2. Go to your domain registrar (where you bought vest3r.com)
3. Add the CNAME record Cloudflare provides
4. Wait 5-10 minutes for DNS to propagate

## Method 2: Using Git (Recommended for updates)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Create a new repository called `vest3r-website`
3. Upload all your files to the repository

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Choose "Connect to Git"
4. Select your GitHub repository
5. Click "Begin setup"

### Step 3: Configure Build Settings
- Build command: (leave empty)
- Build output directory: `/` (root)
- Click "Save and Deploy"

### Step 4: Add Custom Domain
1. Go to "Custom domains"
2. Add `vest3r.com`
3. Follow DNS setup instructions

## Method 3: Using Cloudflare Workers (Advanced)

If you want more control, you can use Cloudflare Workers:

1. Go to Cloudflare Dashboard
2. Click "Workers & Pages"
3. Create a new Worker
4. Upload your files as static assets
5. Configure routing for your domain

## Troubleshooting

### If your domain doesn't work:
1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
2. Make sure CNAME record points to your Cloudflare Pages URL
3. Wait up to 24 hours for full propagation

### If you get SSL errors:
1. Go to Cloudflare Dashboard
2. Click "SSL/TLS"
3. Set encryption mode to "Full" or "Full (strict)"

### If files don't load:
1. Check that all files are uploaded
2. Verify file paths are correct
3. Check browser console for errors

## Quick Test
After deployment, visit:
- `https://vest3r.com` (your domain)
- `https://your-project.pages.dev` (Cloudflare subdomain)

Both should show the same website!

## Need Help?
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Cloudflare support: https://support.cloudflare.com/
