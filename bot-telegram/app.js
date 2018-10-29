const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '728304414:AAFTYz8JJHgZHyTRsnGxcD4Rhj5oVC-gk3k';

// Create a bot that uses 'polling' to fetch new updates
// Utilizar o polling se for ouvir requisições
const bot = new TelegramBot(token, {polling: false});

// Enviar mensagem de texto
//bot.sendMessage('-243504864', 'Teste novo Bot');

// Enviar como documento
//bot.sendDocument('-243504864', 'monitor.png');

// Enviar como foto
bot.sendPhoto('-243504864', 'monitor.png');