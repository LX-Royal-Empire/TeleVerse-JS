const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

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

// Get bot information
let botInfo = null;
bot.telegram.getMe().then(info => {
    botInfo = info;
});

// Start Command
bot.start(async (ctx) => {
    const firstName = ctx.message.from.first_name;
    const welcomeMessage = `
Hello ${firstName} ! 🌟

Welcome to Our Amazing Bot 🤖

- I can help you with various tasks
- Just send me what you need
- Join our channel for updates

Made with ❤️ by @YourUsername
    `;
    
    await ctx.reply(welcomeMessage, {
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [channelButton],
                [supportButton]
            ]
        }
    });
});

// -------------------------------------------------------------------------------------------------------------------------------------------- //

// Handle root domain requests
bot.webhookCallback('/')(async (req, res) => {
    const status = {
        bot: {
            username: botInfo?.username,
            first_name: botInfo?.first_name,
            description: botInfo?.description,
            can_join_groups: botInfo?.can_join_groups,
            can_read_all_group_messages: botInfo?.can_read_all_group_messages,
            supports_inline_queries: botInfo?.supports_inline_queries
        },
        status: "online",
        telegram_link: `https://t.me/${botInfo?.username}`,
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(status, null, 2));
});

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