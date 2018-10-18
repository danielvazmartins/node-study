const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '728304414:AAFTYz8JJHgZHyTRsnGxcD4Rhj5oVC-gk3k';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.sendMessage('-243504864', 'Teste novo Bot');