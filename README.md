<div align="center">

![TeleVerse-JS Logo](https://i.ibb.co/pbjSKHx/34e737c9-35f0-49f0-9d0a-f0d937e41918.jpg)

A lightning-fast Telegram bot template powered by Node.js, optimized for Vercel deployment.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Telegraf](https://img.shields.io/badge/telegraf-^4.15.3-orange.svg)](https://telegraf.js.org/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[Features](#features) • [Quick Setup](#quick-setup) • [Deployment](#deployment) • [Usage](#usage) • [Contributing](#contributing) • [Support](#support)

</div>

## Features

- 🚀 Ready for instant Vercel deployment
- ⚡ Built with Telegraf.js for optimal performance
- 🧹 Clean, minimal, and easily maintainable codebase
- 🔄 Modern async/await syntax for efficient handling of asynchronous operations
- 🛠️ Highly customizable to suit your specific bot requirements
- 📦 Pre-configured with essential bot commands
- 🔒 Secure webhook setup for production environments

## Quick Setup

### Prerequisites

Before you begin, ensure you have the following:

- Node.js 18.x or higher installed
- A Telegram Bot Token (obtain from [@BotFather](https://t.me/BotFather))
- A Vercel account

### Vercel Deployment

1. Fork this repository
2. Log in to your Vercel account
3. Create a new project and import your forked repository
4. Configure the environment variables (add your `BOT_TOKEN`)
5. Deploy the project


### Setting the Webhook

After deployment, set your webhook using the following URL format:

```plaintext
https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<VERCEL_URL>/api/bot
```

Replace `<BOT_TOKEN>` with your actual bot token and `<VERCEL_URL>` with your Vercel deployment URL.

## Usage

### Creating New Commands

To add new commands, edit the `api/bot.js` file:

```javascript
bot.command('yourcommand', async (ctx) => {
    await ctx.reply('Your response here');
});
```

### Handling Messages

To process incoming messages, use the `bot.on('message')` event:

```javascript
bot.on('message', async (ctx) => {
    await ctx.reply('I received your message!');
});
```

## Troubleshooting

- **Webhook errors**: Ensure your Vercel URL is correct and the webhook is properly set.
- **Bot not responding**: Check if your BOT_TOKEN is correctly set in the environment variables.
- **Deployment issues**: Verify that all dependencies are correctly listed in `package.json`.


## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request


Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Support

If this template has been helpful to you, please consider giving it a ⭐️ on GitHub!

For support or questions, please [open an issue](https://github.com/LX-Royal-Empire/TeleVerse-JS/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---