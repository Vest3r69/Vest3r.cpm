# Vest3r.com Discord Profile Website

A simple, modern website to display your Discord profile with Cloudflare Pages deployment.

## Features

- Clean, responsive design
- Discord profile display
- Modern UI with smooth animations
- Mobile-friendly
- Easy Cloudflare Pages deployment

## Setup Instructions

### 1. Get Your Discord Information

1. Enable Developer Mode in Discord (User Settings > Advanced > Developer Mode)
2. Right-click on your profile and select "Copy User ID"
3. Right-click on your avatar and select "Copy Link" to get your avatar hash
4. Note your username and discriminator

### 2. Update Configuration

1. Open `script.js`
2. Replace `YOUR_USER_ID` with your Discord user ID
3. Replace `YOUR_AVATAR_HASH` with your avatar hash
4. Replace `YOUR_DISCRIMINATOR` with your discriminator
5. Update `DISCORD_USERNAME` with your username
6. Update `DISCORD_JOIN_DATE` with your Discord join year

### 3. Cloudflare Pages Deployment

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository or upload files directly
3. Set build command: (leave empty for static site)
4. Set build output directory: `/` (root)
5. Deploy!

### 4. Domain Configuration

1. In Cloudflare Pages, go to your project settings
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed by Cloudflare

## Files Structure

- `index.html` - Main page with profile display
- `styles.css` - Styling
- `script.js` - Profile configuration
- `_headers` - Security headers for Cloudflare
- `_redirects` - URL routing rules

## Customization

- Update colors in `styles.css`
- Modify text content in `index.html`
- Change profile information in `script.js`
- Update the Discord link to point to your profile
