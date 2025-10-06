# Discord Bot Setup for Real Profile Data

To get your real Discord information (status, username, bio, badges, etc.), you need to create a Discord bot and get a bot token.

## Step 1: Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Name it: "Vest3r Profile Bot" (or any name)
4. Click "Create"

## Step 2: Get Bot Token

1. In your application, go to "Bot" in the left sidebar
2. Click "Add Bot"
3. Click "Copy" under the Token section
4. **IMPORTANT**: Keep this token secret! Don't share it publicly.

## Step 3: Get Your User ID

1. Enable Developer Mode in Discord:
   - User Settings → Advanced → Developer Mode (ON)
2. Right-click on your profile → "Copy User ID"
3. Save this ID

## Step 4: Update Your Website

1. Open `script.js`
2. Replace `YOUR_USER_ID` with your Discord user ID
3. Replace `YOUR_BOT_TOKEN` with your bot token

## Step 5: Bot Permissions (Optional)

For more detailed profile data, you can add these permissions to your bot:

1. In Discord Developer Portal → Bot section
2. Scroll down to "Privileged Gateway Intents"
3. Enable:
   - "Presence Intent" (for online status)
   - "Server Members Intent" (for server info)

## What You'll Get

With this setup, your website will display:

✅ **Real-time status** - Online, Idle, Do Not Disturb, Offline  
✅ **Current username** - Your actual Discord username  
✅ **Profile picture** - Your current avatar (including animated ones)  
✅ **Discord badges** - Staff, Partner, Hypesquad, etc.  
✅ **Activity status** - What you're playing or listening to  
✅ **Real-time updates** - Status updates every 30 seconds  

## Security Note

**NEVER** put your bot token in public code! For production:

1. Use environment variables
2. Or create a backend API to handle the Discord requests
3. Or use a serverless function

## Testing

1. Update the script.js with your IDs
2. Open the website
3. Check browser console for any errors
4. Your real Discord profile should load!

## Troubleshooting

### "Failed to fetch user data"
- Check your User ID is correct
- Verify bot token is valid
- Make sure bot is created properly

### "Presence data not available"
- Enable "Presence Intent" in bot settings
- This is normal for some users

### Status not updating
- Check browser console for errors
- Verify bot has proper permissions
- Wait a few minutes for Discord API to sync

Your website will now show your **exact** Discord profile with real-time updates! 🚀
