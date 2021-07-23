const telegramAPI = require("node-telegram-bot-api");
const ud = require('urban-dictionary')
const token = "1946473609:AAERq3PAGlCQSLIObbbXQ3w8698oNXoLdnU";
const bot = new telegramAPI(token, { polling: true });
const qs = require("qs");
const fetch = require("node-fetch");

bot.setMyCommands([
  { command: "/start", description: "Start" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const userName = msg.from.first_name;

  if (text) {
    if (text === "/start") {
      bot.sendMessage(chatId, `Привет ${userName}, введи на английском слово или фразу для поиска`)
    }

    if (text != "/start") {
    const response = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${text}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ffa75e36aemsh2585d2ac58f083fp12bc36jsn9e4796b7f85f",
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    },
    })
    const parsedResponse = await response.json();
    const message = await parsedResponse.list[0].definition;
    const messageWithoutBraces = message.replace(/\[/g, "").replace(/\]/g, "")

    console.log(messageWithoutBraces) 
    bot.sendMessage(chatId, messageWithoutBraces);
    
    const responseGif = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=YtYsTz4ywMjT88AWlUcanezxG2D3TQ35&tag=${text}&rating=g`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const parsedResponseGif = await responseGif.json();
    console.log(parsedResponseGif);
    const replyMessageGif = await parsedResponseGif.data.url;
    bot.sendMessage(chatId, replyMessageGif);
}}})

// bot.on("message", async (msg) => {
//   const text = msg.text;
//   const chatId = msg.chat.id;
//   const userName = msg.from.first_name;

//   if (text) {
//     if (text === "/start") {
//       bot.sendMessage(chatId, `Привет ${userName}, введи на английском слово или фразу для поиска`)
//     }
//     if (text != "/start") {
//     fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${text}`, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "ffa75e36aemsh2585d2ac58f083fp12bc36jsn9e4796b7f85f",
//       "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
//     },
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((message) => {
//       console.log(message);
//       // console.log(message.list[0].definition);
//       return bot.sendMessage(chatId, message.list[0].definition.replace('[', '').replace(']', ''))
//     })
//     .catch(err => {
//       console.error(err);
//     });
//     }
//   }
// }
// )

