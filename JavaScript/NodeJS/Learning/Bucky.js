//var movies = require("./movies");
//console.log("Bucky's favorite movies is: " + movies.favMovie);

var movies2 = require("./ObjectFactoryExample");

var buckyMovies2 = movies2();
buckyMovies2.favMovie = "Inglorious Bastards";
console.log("Bucky2's favourite movie is " + buckyMovies2.favMovie);

buckyMovies2.favMovie = "American Psycho";
console.log("Bucky2's favourite movie is " + buckyMovies2.favMovie);