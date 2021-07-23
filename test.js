// let str = "So it is [egoistical]."
// console.log(str.replace('[', '').replace(']', ''))
const fetch = require("node-fetch");
const qs = require("qs");

// async function testing (text) {
//   const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YtYsTz4ywMjT88AWlUcanezxG2D3TQ35&q=${text}&limit=25&offset=0&rating=g&lang=en`, {
//   method: "GET",
//   headers: {
//     // api_key: "YtYsTz4ywMjT88AWlUcanezxG2D3TQ35",
//     // q: text,
//     // limit: 25,
//     // offset: 0,
//     // rating: "g",
//     // lang: "en",
//   },
//   })
//   const parsedResponse = await response.json();
//   console.log(parsedResponse);
//   // const replyMesage = await parsedResponse.list[0].definition;
//   // console.log(replyMesage);
//   // bot.sendMessage(chatId, replyMesage.replace('[', '').replace(']', ''));
// }

// testing("love")


fetch("https://google-translate20.p.rapidapi.com/translate?text=love&tl=ru&sl=en", {
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
  console.log(message);
})
.catch(err => {
	console.error(err);
});

