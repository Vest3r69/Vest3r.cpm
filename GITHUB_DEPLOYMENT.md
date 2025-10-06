# Deploy Vest3r.com via GitHub - Complete Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `vest3r-website`
4. Description: "Vest3r.com Discord profile website"
5. Make it **Public** (required for free Cloudflare Pages)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

## Step 2: Upload Your Files to GitHub

### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `_headers`
   - `_redirects`
   - `README.md`
3. Add commit message: "Initial website files"
4. Click "Commit changes"

### Option B: Using Git Command Line (if you have Git installed)
```bash
# In your project folder
git init
git add .
git commit -m "Initial website files"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vest3r-website.git
git push -u origin main
```

## Step 3: Connect to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Click "Connect to Git"
4. Authorize Cloudflare to access GitHub
5. Select your `vest3r-website` repository
6. Click "Begin setup"

## Step 4: Configure Build Settings

- **Framework preset**: None (or Static Site)
- **Build command**: (leave empty)
- **Build output directory**: `/` (root directory)
- **Root directory**: (leave empty)
- Click "Save and Deploy"

## Step 5: Add Your Custom Domain

1. Wait for initial deployment to complete (2-3 minutes)
2. Go to your project dashboard
3. Click "Custom domains" in the left sidebar
4. Click "Set up a custom domain"
5. Enter: `vest3r.com`
6. Click "Continue"

## Step 6: Configure DNS

Cloudflare will show you DNS records to add:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS management section
3. Add a **CNAME** record:
   - **Name**: `@` (or leave blank)
   - **Value**: `your-project.pages.dev`
   - **TTL**: 3600 (or Auto)

4. Add a **CNAME** record for www:
   - **Name**: `www`
   - **Value**: `your-project.pages.dev`
   - **TTL**: 3600

## Step 7: Wait and Test

1. Wait 5-15 minutes for DNS propagation
2. Test your site:
   - `https://vest3r.com`
   - `https://www.vest3r.com`
   - `https://your-project.pages.dev` (Cloudflare subdomain)

## Step 8: Enable HTTPS (Automatic)

Cloudflare will automatically:
- Issue SSL certificate
- Enable HTTPS
- Redirect HTTP to HTTPS

## Making Updates (The Best Part!)

When you want to update your website:

1. Edit files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Cloudflare Pages automatically rebuilds and deploys!

## Benefits of GitHub Method

✅ **Automatic deployments** - Push code, site updates instantly  
✅ **Version control** - Track all changes  
✅ **Easy collaboration** - Others can contribute  
✅ **Free hosting** - No cost for Cloudflare Pages  
✅ **Custom domain** - Your own vest3r.com  
✅ **SSL certificate** - Automatic HTTPS  

## Troubleshooting

### If domain doesn't work:
- Check DNS at [whatsmydns.net](https://www.whatsmydns.net)
- Verify CNAME record is correct
- Wait up to 24 hours for full propagation

### If build fails:
- Check Cloudflare Pages build logs
- Make sure all files are in the root directory
- Verify file names are correct

### If you need to change files:
- Edit locally or use GitHub web editor
- Commit changes
- Cloudflare auto-deploys in 2-3 minutes

## Next Steps After Deployment

1. Update `script.js` with your actual Discord info
2. Customize colors in `styles.css`
3. Add more content to `index.html`
4. Push changes to see them live instantly!

Your website will be live at **https://vest3r.com** 🚀
