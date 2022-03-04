const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 5000;

var rp = require('request-promise');

// create a POST route
// To make a POST request you can write:

const response = await fetch('/express_backend', {method: 'POST);
                                                  
app.use(express.static('public'));
require('dotenv').config();

function makeUrl(word_id, baseUrl, source_lang) {
  return baseUrl + source_lang + '/' + word_id.toLowerCase();
}

app.post('/express_backend/:word_id', (req, res) => {
  //console.log(req.params)
  res.send('success')
  var word_id = req.params.word_id;
  var baseUrl = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/';
  var source_lang = 'en';
  var url = makeUrl(word_id, baseUrl, source_lang);
  url = encodeURI(url);
  //console.log('url:', url)
      var options = {
      url,
      headers: {
        'app_id': process.env.APP_ID, 
        'app_key': process.env.APP_KEY,
        'Host': process.env.HOST,
        'Cache-Control': 'no-cache',
        'Postman-Token': process.env.POSTMAN_TOKEN
      }
    };

    //get definitions and pronunciation
  var results = [];
    rp.get(options, function(error, response, body){
      if (error) {
        return 'Not Found'
      }
     }).then(function(body){
          var data = JSON.parse(body)
          var lexicalEntries = data.results[0].lexicalEntries;
            lexicalEntries.forEach(function(entry) {
              entry.entries.forEach(function(item){ results.push(item.senses[0].definitions) });
              //var audioFile = entry.pronunciations.forEach(function(item){console.log(item.audioFile)});
             })
          console.log(results)
          return results;
     }).catch(function(error){
      if (error.statusCode == 404){
        results = 'No entries found for ' + word_id;
        console.log(results);
        return results;
      }
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// This is a GET request:

const response = await fetch('/express_backend');

app.get('/express_backend', (req, res) => {
  res.send({ express: results });
});
