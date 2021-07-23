// let str = "So it is [egoistical]."
// console.log(str.replace('[', '').replace(']', ''))
const fetch = require("node-fetch");

async function testing (text) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YtYsTz4ywMjT88AWlUcanezxG2D3TQ35&q=${text}&limit=25&offset=0&rating=g&lang=en`, {
  method: "GET",
  headers: {
    // api_key: "YtYsTz4ywMjT88AWlUcanezxG2D3TQ35",
    // q: text,
    // limit: 25,
    // offset: 0,
    // rating: "g",
    // lang: "en",
  },
  })
  const parsedResponse = await response.json();
  console.log(parsedResponse);
  // const replyMesage = await parsedResponse.list[0].definition;
  // console.log(replyMesage);
  // bot.sendMessage(chatId, replyMesage.replace('[', '').replace(']', ''));
}

testing("love")