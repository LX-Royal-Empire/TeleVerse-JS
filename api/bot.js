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