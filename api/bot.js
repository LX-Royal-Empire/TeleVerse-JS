const { Telegraf, Markup } = require('telegraf');

// -------------------------------------------------------------------------------------------------------------------------------------------- //

// Define your bot token and domain (Important)
const BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_DOMAIN = process.env.DOMAIN;

// -------------------------------------------------------------------------------------------------------------------------------------------- //

const bot = new Telegraf(BOT_TOKEN);

// -------------------------------------------------------------------------------------------------------------------------------------------- //

// Define channel button
const channelButton = Markup.button.url('Join Channel 🌟', 'https://t.me/LXRoyalEmpire');
const supportButton = Markup.button.url('Support Group 💭', 'https://t.me/LXRoyalEmpire');

// -------------------------------------------------------------------------------------------------------------------------------------------- //

// Start Command
bot.start(async (ctx) => {
    const firstName = ctx.message.from.first_name;
    
    // Define messages
    const homeMessage = `
"ᴡᴇʟᴄᴏᴍᴇ" ${firstName} ! 🌟

"ɪ'ᴍ ʏᴏᴜʀ ᴀᴍᴀᴢɪɴɢ ᴀssɪsᴛᴀɴᴛ" 🤖

- ɪ ᴄᴀɴ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴠᴀʀɪᴏᴜs ᴛᴀsᴋs
- ᴊᴜsᴛ sᴇɴᴅ ᴍᴇ ᴡʜᴀᴛ ʏᴏᴜ ɴᴇᴇᴅ
- ᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs

"ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ʟx"`;

    const aboutMessage = `
"ᴀʙᴏᴜᴛ ᴜs" 📖

- ᴠᴇʀsɪᴏɴ: 1.0.0
- ᴅᴇᴠᴇʟᴏᴘᴇʀ: ʟx
- ʟᴀɴɢᴜᴀɢᴇ: ɴᴏᴅᴇᴊs

"ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴏᴜʀ ʙᴏᴛ" 🌟`;

    await ctx.reply(homeMessage, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [channelButton],
            [Markup.button.callback('ᴀʙᴏᴜᴛ', 'about')]
        ])
    });
});

// Handle callback queries
bot.action('about', async (ctx) => {
    try {
        await ctx.editMessageText(aboutMessage, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            ...Markup.inlineKeyboard([
                [Markup.button.callback('ʙᴀᴄᴋ', 'home')]
            ])
        });
    } catch (error) {
        console.error('Error in about action:', error);
    }
});

bot.action('home', async (ctx) => {
    try {
        const firstName = ctx.callbackQuery.from.first_name;
        await ctx.editMessageText(homeMessage, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            ...Markup.inlineKeyboard([
                [channelButton],
                [Markup.button.callback('ᴀʙᴏᴜᴛ', 'about')]
            ])
        });
    } catch (error) {
        console.error('Error in home action:', error);
    }
});

// -------------------------------------------------------------------------------------------------------------------------------------------- //



// -------------------------------------------------------------------------------------------------------------------------------------------- //

// Launch bot
bot.launch({
    webhook: {
        domain: BOT_DOMAIN,
        hookPath: '/api/bot',
    },
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));