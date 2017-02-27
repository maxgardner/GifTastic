// Topic variables

var topics = [
	{
		topic: ,
		search:
	},
	{
		topic: ,
		search:
	}
];
var queryURL = "http://api.giphy.com/v1/gifs/search?";

// User input variables

// Loop through topics array to display buttons

for (var i = 0; i < topics.length; i++) {

}

// API Key: dc6zaTOxFJmzC
// http://api.giphy.com/v1/gifs/search?
// -- search term -- q=search+term+here
// -- limit -- &limit=10

// When someone clicks on button, pull search term and query Giphy API to pull 10 corresponding GIFs

$(document).on("click", ".search-term", function() {

var searchTerm = $(this).data("topic");

queryURL += searchTerm + "&limit=10";

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(result) {
	var gif = result.data;
	console.log(gif);
}).fail(function(error) {
	console.log(error);
	alert("Something went wrong. Try your request again!");
})
});