# Cloudflare Pages Setup for Discord Integration

## Step 1: Get Your Discord Data

1. **Discord User ID:**
   - Enable Developer Mode in Discord (Settings → Advanced → Developer Mode)
   - Right-click your profile → "Copy User ID"

2. **Discord Bot Token:**
   - Go to https://discord.com/developers/applications
   - Create new application → Go to "Bot" section
   - Add Bot → Copy the token

## Step 2: Configure Cloudflare Pages

1. Go to your Cloudflare Pages dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
DISCORD_USER_ID = your_actual_user_id_here
DISCORD_BOT_TOKEN = your_actual_bot_token_here
```

## Step 3: Update Build Settings

1. In Cloudflare Pages → **Settings** → **Builds & deployments**
2. Set **Build command** to:
```bash
sed -i 's/{{DISCORD_USER_ID}}/'$DISCORD_USER_ID'/g' script.js && sed -i 's/{{DISCORD_BOT_TOKEN}}/'$DISCORD_BOT_TOKEN'/g' script.js
```
3. Set **Build output directory** to: `/` (root)
4. Set **Root directory** to: `/` (root)

## Step 4: Deploy

1. Push your changes to GitHub
2. Cloudflare will automatically rebuild with your Discord tokens
3. Your site will now show real Discord data!

## What You'll Get

✅ **Real-time status** - Online, Idle, Do Not Disturb, Offline  
✅ **Current username** - Your actual Discord username  
✅ **Profile picture** - Your current avatar (including animated ones)  
✅ **Discord badges** - Staff, Partner, Hypesquad, etc.  
✅ **Activity status** - What you're playing or listening to  
✅ **Real-time updates** - Status updates every 30 seconds  

## Security

Your Discord tokens are safely stored as environment variables in Cloudflare and never exposed in your GitHub repo!
