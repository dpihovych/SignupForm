console.log("index.js")
// import TeleBot from 'telebot';
const TeleBot = require('telebot')

let name = '';
let email = '';
let message = '';

const bot = new TeleBot({
    token: '5446809526:AAFe6Ep4Q-4bYmu2pThM15UtJd0XcLFf07Y',
    sleep: 1000, // How often check updates (in ms)
    timeout: 0, // Update pulling timeout (0 - short polling)
    limit: 100, // Limits the number of updates to be retrieved
    retryTimeout: 5000 // Reconnecting timeout (in ms)
});

function handleSubmit(event) {
    event.preventDefault(); // Зупинити стандартну поведінку форми (відправку)

    // Отримати значення полів форми
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    message = document.getElementById('message').value;

    // Вивести значення в консоль
    console.log("Ім'я - " + name);
    console.log("Email - " + email);
    console.log("Текст - " + message);

    bot.on('text', (msg) => {
        bot.sendMessage(msg.chat.id, "Ім'я - " + name);
        bot.sendMessage(msg.chat.id, "Email - " + email);
        bot.sendMessage(msg.chat.id, "Текст - " + message);
    });
}

bot.connect();
