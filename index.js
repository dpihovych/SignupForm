console.log("index.js")

import telebot from 'telebot';

//const telebot = require ('telebot')

let name = '';
let email = '';
let message = '';

const bot = new telebot({
    token: '',
    sleep: 1000, // How often check updates (in ms)
    timeout: 0, // Update pulling timeout (0 - short polling)
    limit: 100, // Limits the number of updates to be retrieved
    retryTimeout: 5000 // Reconnecting timeout (in ms)
});

// async function handleSubmit(event) {
//     event.preventDefault(); // Зупинити стандартну поведінку форми (відправку)

//     // Отримати значення полів форми
//     name = document.getElementById('name').value;
//     email = document.getElementById('email').value;
//     message = document.getElementById('message').value;

//     // Вивести значення в консоль
//     console.log("Ім'я - " + name);
//     console.log("Email - " + email);
//     console.log("Текст - " + message);

    

//     bot.on('text', (msg) => {
//         bot.sendMessage(msg.chat.id, "Ім'я - " + name);
//         bot.sendMessage(msg.chat.id, "Email - " + email);
//         bot.sendMessage(msg.chat.id, "Текст - " + message);
//     });
// }




function handleSubmit(event) {
    event.preventDefault(); // Зупинити стандартну поведінку форми (відправку)

    let res = {   
    name:document.getElementById('name').value,
    email: document.getElementById('email').value,
    message:document.getElementById('message').value
}

return res


}

const data = handleSubmit()

data.then( data => {
    bot.on('text', (msg) => {
        bot.sendMessage(msg.chat.id, "Ім'я - " + data.name);
        bot.sendMessage(msg.chat.id, "Email - " + data.email);
        bot.sendMessage(msg.chat.id, "Текст - " + data.message);
    });

}

)

bot.connect();


// const requestURL = "https://random-data-api.com/api/v2/users/"
// const requestPromise = fetch(requestURL)

// requestPromise.then( response => 
//     response.json()
// ).then(resp => console.log(resp))