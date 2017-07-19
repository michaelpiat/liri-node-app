var keys = require("./keys.js");
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var inquirer = require("inquirer");
var fs = require("fs");

// var command = process.argv[2]; 

// switch (command) {
// 	case "my-tweets":
// 		myTwitter();
// 		break;
// 	case "spotify-this-song":
// 		spotifySong();
// 		break;
// 	case "movie-this":
// 		//functions goes here
// 		break;
// 	case "do-what-it-says":
// 		//functions goes here
// 		break;
// }


// function myTwitter() {

// 	var client = new twitter({
//   		consumer_key: keys.twitterKeys.consumer_key,
//   		consumer_secret: keys.twitterKeys.consumer_secret,
//   		access_token_key: keys.twitterKeys.access_token_key,
//   		access_token_secret: keys.twitterKeys.access_token_secret
// 	});

// 	var params = {screen_name: 'mikepiat123', count: 20};
// 	client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   		if(error) {
//   			console.log(error)
//   		}

//   		if (!error) {
//     		console.log("---------------")
//     			for (var i = 0; i < tweets.length; i++) {
//     				console.log("Time: " + tweets[i].created_at + "\n");
//     				console.log("Tweet: " + tweets[i].text + "\n");
//     			}
//   		}console.log("---------------")
// 	});
// }

// function spotifySong(song) {

// var spotify = new Spotify({
// id: keys.spotifyKeys.id,
// secret: keys.spotifyKeys.secret,
// });

// 	spotify.search({ type: "track", query: song}, function(err, data) {
// 		if (!song) {
// 			song = "the sign ace of base";
// 		}

// 		if (err) {
// 			console.log("Something really bad happend. Please search for a different song");
// 		} 
// 		if (!err) {
// 			console.log("-------------------")
// 			console.log("Artist: " + data.tracks.items[0].name + "\n");
// 			console.log("Song Title: " + data.tracks.items[0].album.artists[0].name + "\n");
// 			console.log("Album: " + data.tracks.items[0].album.name + "\n");
// 			console.log("Preview Link: " + data.tracks.items[0].album.artists[0].uri + "\n");
// 			console.log("-------------------")
// 		}
// 	});
// }



