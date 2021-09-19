const fetch = require("node-fetch");
const telegramAPI = require("node-telegram-bot-api");
const token = "1946473609:AAERq3PAGlCQSLIObbbXQ3w8698oNXoLdnU";
const bot = new telegramAPI(token, {polling: true});

bot.setMyCommands([
    {command: "/start", description: "Start"},
]);

bot.on("message", async (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;
        const userName = msg.from.first_name;
        if (text) {
            if (text === "/start") {
                bot.sendMessage(chatId, `Привет ${userName}, введи на английском слово или фразу для поиска`)
            }

            if (text !== "/start") {
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

                bot.sendMessage(chatId, `\n Результаты поиска по запросу ${text} ===> \n ${messageWithoutBraces}`);


                async function translate(messageWithoutBraces) {
                    await fetch(`https://google-translate20.p.rapidapi.com/translate?text=${messageWithoutBraces}&tl=ru&sl=en`, {
                        method: "GET",
                        headers: {
                            "x-rapidapi-key": "ffa75e36aemsh2585d2ac58f083fp12bc36jsn9e4796b7f85f",
                            "x-rapidapi-host": "google-translate20.p.rapidapi.com"
                        }
                    })
                        .then((response) => {
                            return response.json();
                        })
                        .then((message) => {
                            console.log(message.data.translation);
                            bot.sendMessage(chatId, `Перевод на русский ===> \n ${message.data.translation}`);
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }

                translate(messageWithoutBraces)

                const responseGif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YtYsTz4ywMjT88AWlUcanezxG2D3TQ35&q=${text}&limit=1&offset=0&rating=g&lang=en`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const parsedResponseGif = await responseGif.json();
                const replyMessageGif = await parsedResponseGif.data[0].url;
                bot.sendMessage(chatId, `Гифка ===> ${replyMessageGif}`);
            }
        }
    }
)

