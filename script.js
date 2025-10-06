// Discord Profile Configuration
const DISCORD_USER_ID = 'YOUR_USER_ID'; // Replace with your Discord user ID
const DISCORD_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your Discord bot token

// DOM Elements
const profileAvatar = document.getElementById('profileAvatar');
const profileName = document.getElementById('profileName');
const profileTag = document.getElementById('profileTag');
const statusIndicator = document.querySelector('.stat-value.online');

// Discord API endpoints
const DISCORD_API_BASE = 'https://discord.com/api/v10';

// Discord status colors
const STATUS_COLORS = {
    online: '#43b581',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d'
};

// Discord status text
const STATUS_TEXT = {
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline'
};

// Fetch Discord user data
async function fetchDiscordData() {
    try {
        // Fetch user profile
        const userResponse = await fetch(`${DISCORD_API_BASE}/users/${DISCORD_USER_ID}`, {
            headers: {
                'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!userResponse.ok) {
            throw new Error(`Failed to fetch user data: ${userResponse.status}`);
        }

        const userData = await userResponse.json();
        
        // Fetch user's presence/status
        let presenceData = null;
        try {
            const presenceResponse = await fetch(`${DISCORD_API_BASE}/users/${DISCORD_USER_ID}/profile`, {
                headers: {
                    'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (presenceResponse.ok) {
                presenceData = await presenceResponse.json();
            }
        } catch (e) {
            console.log('Presence data not available');
        }

        return { userData, presenceData };
    } catch (error) {
        console.error('Error fetching Discord data:', error);
        return null;
    }
}

// Get avatar URL with proper fallbacks
function getAvatarUrl(userData) {
    if (userData.avatar) {
        const format = userData.avatar.startsWith('a_') ? 'gif' : 'png';
        return `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.${format}?size=256`;
    } else {
        // Default avatar based on discriminator
        const discriminator = parseInt(userData.discriminator);
        const defaultAvatar = discriminator % 5;
        return `https://cdn.discordapp.com/embed/avatars/${defaultAvatar}.png?size=256`;
    }
}

// Get user display name
function getDisplayName(userData) {
    return userData.global_name || userData.username;
}

// Get user tag
function getUserTag(userData) {
    if (userData.discriminator && userData.discriminator !== '0') {
        return `#${userData.discriminator}`;
    } else {
        return `@${userData.username}`;
    }
}

// Get user status
function getUserStatus(presenceData) {
    if (!presenceData || !presenceData.user) {
        return 'offline';
    }
    
    const status = presenceData.user.presence?.status || 'offline';
    return status;
}

// Get user activity
function getUserActivity(presenceData) {
    if (!presenceData || !presenceData.user || !presenceData.user.presence) {
        return null;
    }
    
    const activities = presenceData.user.presence.activities || [];
    const spotifyActivity = activities.find(activity => activity.type === 2); // Spotify
    const gameActivity = activities.find(activity => activity.type === 0); // Playing
    
    return spotifyActivity || gameActivity || null;
}

// Get user badges
function getUserBadges(userData) {
    if (!userData.public_flags) return [];
    
    const badges = [];
    const flags = userData.public_flags;
    
    const badgeMap = {
        1: { name: 'Staff', icon: '👑' },
        2: { name: 'Partner', icon: '🤝' },
        4: { name: 'Hypesquad', icon: '🎉' },
        8: { name: 'Bug Hunter Level 1', icon: '🐛' },
        64: { name: 'Hypesquad Bravery', icon: '⚔️' },
        128: { name: 'Hypesquad Brilliance', icon: '💎' },
        256: { name: 'Hypesquad Balance', icon: '⚖️' },
        512: { name: 'Early Supporter', icon: '💜' },
        1024: { name: 'Team User', icon: '👥' },
        4096: { name: 'Bug Hunter Level 2', icon: '🐛' },
        16384: { name: 'Verified Bot', icon: '✅' },
        65536: { name: 'Early Verified Bot Developer', icon: '🤖' },
        131072: { name: 'Moderator Programs Alumni', icon: '🛡️' },
        262144: { name: 'Bot Uses HTTP Interactions', icon: '🔗' },
        524288: { name: 'Active Developer', icon: '⚡' },
        1048576: { name: 'Verified Bot Developer', icon: '🔧' }
    };
    
    for (const [flag, badge] of Object.entries(badgeMap)) {
        if (flags & parseInt(flag)) {
            badges.push(badge);
        }
    }
    
    return badges;
}

// Update profile display
function updateProfileDisplay(userData, presenceData) {
    // Update avatar
    profileAvatar.src = getAvatarUrl(userData);
    profileAvatar.alt = `${getDisplayName(userData)}'s avatar`;
    
    // Update username and tag
    profileName.textContent = getDisplayName(userData);
    profileTag.textContent = getUserTag(userData);
    
    // Update status
    const status = getUserStatus(presenceData);
    statusIndicator.textContent = STATUS_TEXT[status] || 'Offline';
    statusIndicator.style.color = STATUS_COLORS[status] || STATUS_COLORS.offline;
    
    // Update Discord link
    const discordLink = document.querySelector('.discord-btn');
    discordLink.href = `https://discord.com/users/${userData.id}`;
    
    // Add badges if any
    const badges = getUserBadges(userData);
    if (badges.length > 0) {
        addBadgesToProfile(badges);
    }
    
    // Add activity if any
    const activity = getUserActivity(presenceData);
    if (activity) {
        addActivityToProfile(activity);
    }
}

// Add badges to profile
function addBadgesToProfile(badges) {
    const profileDetails = document.querySelector('.profile-details');
    
    // Remove existing badges
    const existingBadges = document.querySelector('.profile-badges');
    if (existingBadges) {
        existingBadges.remove();
    }
    
    // Create badges container
    const badgesContainer = document.createElement('div');
    badgesContainer.className = 'profile-badges';
    badgesContainer.innerHTML = '<span class="badges-label">Badges:</span>';
    
    badges.forEach(badge => {
        const badgeElement = document.createElement('span');
        badgeElement.className = 'badge';
        badgeElement.title = badge.name;
        badgeElement.textContent = badge.icon;
        badgesContainer.appendChild(badgeElement);
    });
    
    profileDetails.appendChild(badgesContainer);
}

// Add activity to profile
function addActivityToProfile(activity) {
    const profileDetails = document.querySelector('.profile-details');
    
    // Remove existing activity
    const existingActivity = document.querySelector('.profile-activity');
    if (existingActivity) {
        existingActivity.remove();
    }
    
    // Create activity container
    const activityContainer = document.createElement('div');
    activityContainer.className = 'profile-activity';
    
    let activityText = '';
    if (activity.type === 2) { // Spotify
        activityText = `🎵 Listening to ${activity.details} by ${activity.state}`;
    } else if (activity.type === 0) { // Playing
        activityText = `🎮 Playing ${activity.name}`;
    }
    
    if (activityText) {
        activityContainer.innerHTML = `<span class="activity-text">${activityText}</span>`;
        profileDetails.appendChild(activityContainer);
    }
}

// Initialize profile with real Discord data
async function initializeProfile() {
    console.log('Fetching Discord data...');
    
    const data = await fetchDiscordData();
    if (data) {
        updateProfileDisplay(data.userData, data.presenceData);
        console.log('Discord profile loaded successfully!');
    } else {
        console.error('Failed to load Discord profile data');
        // Fallback to static data
        profileName.textContent = 'Discord User';
        profileTag.textContent = '#0000';
        profileAvatar.src = 'https://cdn.discordapp.com/embed/avatars/0.png?size=256';
    }
}

// Update status periodically
function startStatusUpdates() {
    setInterval(async () => {
        const data = await fetchDiscordData();
        if (data) {
            const status = getUserStatus(data.presenceData);
            statusIndicator.textContent = STATUS_TEXT[status] || 'Offline';
            statusIndicator.style.color = STATUS_COLORS[status] || STATUS_COLORS.offline;
            
            const activity = getUserActivity(data.presenceData);
            if (activity) {
                addActivityToProfile(activity);
            }
        }
    }, 30000); // Update every 30 seconds
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeProfile();
    startStatusUpdates();
});