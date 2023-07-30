const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
const request = require('request');

const TelegramBot = require('node-telegram-bot-api');

var serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const token = '5715961773:AAH4ix8kKEVeMTzWK6V80lx9IkGqFAAxw70';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(mg){
request('http://www.omdbapi.com/?i='+mg.text+'&apikey=7a25707', function (error, response, body) {
  if(JSON.parse(body).Response=="True"){
    db.collection("movies").add({
        Title :JSON.parse(body).Title,
        ReleaseDate : JSON.parse(body).Released,q1ds1w,
        Actors:JSON.parse(body).Actors,
        Rating : JSON.parse(body).Ratings[0].Value
  }).then(()=>{
    bot.sendMessage(mg.chat.id, "Title "+JSON.parse(body).Title)
    bot.sendMessage(mg.chat.id, "Release Date "+JSON.parse(body).Released)
    bot.sendMessage(mg.chat.id, "Actors "+JSON.parse(body).Actors)
    bot.sendMessage(mg.chat.id, "Rating "+JSON.parse(body).Ratings[0].Value)
  })  
}
  else{
      bot.sendMessage(mg.chat.id, "Movie not found")
  }
});
})