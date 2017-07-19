var keys = require("./keys.js");
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var inquirer = require("inquirer");
var fs = require("fs");

var command = process.argv[2]; 
var title = '';

for (var i = 3; i < process.argv.length; i++) {
	title += (process.argv[i]+ " ");	
}

search(command, title);

function search(command, title) {
switch (command) {
	case "my-tweets":
		myTwitter();
		break;
	case "spotify-this-song":
		spotifySong(title);
		break;
	case "movie-this":
		movieThis(title);
		break;
	case "do-what-it-says":
			doWhatItSays();
		break;
}
}

function myTwitter() {

	var client = new twitter({
  		consumer_key: keys.twitterKeys.consumer_key,
  		consumer_secret: keys.twitterKeys.consumer_secret,
  		access_token_key: keys.twitterKeys.access_token_key,
  		access_token_secret: keys.twitterKeys.access_token_secret
	});

	var params = {screen_name: 'mikepiat123', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if(error) {
  			console.log(error)
  		}

  		if (!error) {
    		console.log("---------------")
    			for (var i = 0; i < tweets.length; i++) {
    				console.log("Time: " + tweets[i].created_at + "\n");
    				console.log("Tweet: " + tweets[i].text + "\n");
    			}
  		}console.log("---------------")
	});
}

function spotifySong(song) {

	if (!song) {
		song = "the sign ace of base";
		}

var spotify = new Spotify({
id: keys.spotifyKeys.id,
secret: keys.spotifyKeys.secret,
});

	spotify.search({ type: "track", query: song}, function(err, data) {		

		if (err) {
			console.log("Something really bad happend. Please search for a different song");
		} 
		if (!err) {
			console.log("-------------------")
			console.log("Artist: " + data.tracks.items[0].name + "\n");
			console.log("Song Title: " + data.tracks.items[0].album.artists[0].name + "\n");
			console.log("Album: " + data.tracks.items[0].album.name + "\n");
			console.log("Preview Link: " + data.tracks.items[0].album.artists[0].uri + "\n");
			console.log("-------------------")
		}
	});
}

function movieThis(movie) {
	if (!movie) {
		movie = "Mr.+Nobody";
	}

	var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {
		
		if (!error && response.statusCode === 200) {
			console.log("---------------");
			console.log("Title: " + JSON.parse(body).Title + "\n");
			console.log("Year: " + JSON.parse(body).Year + "\n");
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating + "\n");
			console.log("Country: " + JSON.parse(body).Country + "\n");
			console.log("Language: " + JSON.parse(body).Language + "\n");
			console.log("Plot: " + JSON.parse(body).Plot + "\n");
			console.log("Actors: " + JSON.parse(body).Actors + "\n");
			console.log("---------------");
		}
	})

}

function doWhatItSays() {

	fs.readFile("random.txt", "utf8", function(error, data){

		if (error) {
			return console.log(error);
		}

		var dataArr = data.split(",");
		command = dataArr[0];
		title = dataArr[1];

		search(command, title);
	})
	
}








