const telegramAPI = require("node-telegram-bot-api");
const ud = require('urban-dictionary')
const token = "1946473609:AAERq3PAGlCQSLIObbbXQ3w8698oNXoLdnU";
const bot = new telegramAPI(token, { polling: true });
const qs = require("qs");
const fetch = require("node-fetch");

// bot.setMyCommands([
//   { command: "/start", description: "Start" },
// ]);

// const keyboard = [
//   [
//     {
//       text: "Urban dictionary",
//       callback_data: "\/ud",
//     },
//   ],
//   [
//     {
//       text: "Шутейки от чак нориса",
//       callback_data: "\/ch",
//     },
//   ],
// ];

// bot.on('message', (message) => {
// const userName = message.from.first_name;
// console.log(message);
// const chatId = message.chat.id;
// const text = message.text;

// if (text === "/start") {
//   bot.sendMessage(chatId, `Привет ${userName}, чем займемся?`, 
//   {


//     reply_markup: {
//       inline_keyboard: keyboard,
//     },
//   });

// } 

// console.log(keyboard);

// if (text[0].callback_data === "ud") {
  
// bot.sendMessage(chatId, "Okay, lets find something. Type a word or phrase")

// // bot.on('message', (msg) => {}
// // fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="api"`, {
// // method: "GET",
// // headers: {
// //   "x-rapidapi-key": "ffa75e36aemsh2585d2ac58f083fp12bc36jsn9e4796b7f85f",
// //   "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
// // },
// // })
// // .then((response) => {
// //   return response.json();
// // })
// // .then((message) => {
// //   // console.log(message.list[0].definition);
// //   return bot.sendMessage(chatId, message.list[0].definition)
// // })
// // .catch(err => {
// //   console.error(err);
// // });

// }


// }
// )

// // fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${text}`, {
// //   method: "GET",
// //   headers: {
// //     "x-rapidapi-key": "ffa75e36aemsh2585d2ac58f083fp12bc36jsn9e4796b7f85f",
// //     "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
// //   },
// // })
// // .then((response) => {
// //   return response.json();
// // })
// // .then((message) => {
// //   // console.log(message.list[0].definition);
// //   return bot.sendMessage(chatId, message.list[0].definition)
// // })
// // .catch(err => {
// //   console.error(err);
// // });



// let text = "js"

// fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${text}`, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "ffa75e36aemsh2585d2ac58f083fp12bc36jsn9e4796b7f85f",
//       "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
//     },
//   })
//   .then((response) => {
//     // console.log(response)
//     return response.json();
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch(err => {
//     console.error(err);
//   });