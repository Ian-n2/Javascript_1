// var sports = ['football', 'tennis', 'ruby'];
// // console.log(sports);
//
// // console.log('number of elements:', sports.length);
//
// // console.log('first sport:', sports[0]);
// // console.log('second sport:', sports[1]);
//
// sports.push('curling'); // adds to the end of the array
// sports.push('snooker');
// sports.push('darts');
// console.log('sports array:', sports);

// var removedSport = sports.pop(); // removes from the end
// console.log('removed sport:', removedSport); // this shows us the sports removed.

// sports.pop();
// console.log('sports:', sports);


// sports.unshift('basketball'); // adds to the start.
// console.log('sports arraay:', sports);

// var removedSport = sports.shift();// removes for the start.
// console.log('removed sport', removedSport);
// console.log('array w/ basketball removed:' , sports);

// var removedSport = sports.splice(3, 1); // the fisrt one is the postion in the
// array and the second one is how many we want to take out.
// console.log('removed sport:', removedSport);
// console.log('sports array', sports);
//
// for (var currentSport of sports) {
// var upperCasedSport = sport.toUpperCase();
// console.log(upperCasedSport);
// }
//
// for (var i = 0; i<sports.length; i++// means i+=1) {
//
//   var currentSport = sports[i];
//   var upperCasedSport = currentSport.toUpperCase();
//   console.log(upperCasedSport);
// }

// for (initialisedCounter; condition; mutateCounter) this is how it
// all works

// var movie = {
//   title: 'Parasite',
//   year: 2019,
//   language: 'Korean'
// };
// //
// // console.log('movie object:', movie);
// // console.log('movie title:', movie.title);
//
// movie.cast = ['Song Kang-ho', 'Lee Sun-kyun'];
// // updates the object
// //dot rotatiuon wont work if the movie has a speacial charter in it
// // such as - /
// movie.language = 'English'
// //thats when you would need to put it in the box
// // another way to update the object.
// movie['language'] = 'french'
// movie['subtitle-language'] = 'English'; // this will be needed
// // in week 14 day 2 homework
// // console.log('movie object:', movie);
//
// var propertyToAccess = 'subtitle-language';
// movie[propertyToAccess] = 'German';
// // console.log('subtitle language:', movie[propertyToAccess]);
// // console.log('subtitle language', movie.propertyToAccess);
//
// delete movie.year; // used to delete the key.
// // console.log('movie without year:', movie);
//
// movie.ratings = {
//   critic: 94,
//   audience: 95
// }
// // console.log('movie obj:', movie);
//
// // console.log('audience:', movie.ratings.audience);
// // this is drilling down in the objects within objects.
// //
// // for (var key in movie) { // look into this.
// // console.log(`The ${key} is ${movie[key]}`); // always need to
// // //use square brackets.
// // }
// var keys = Object.keys(movie);
// // console.log('keys:', keys);


var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];


// 1. Loop through the array of movies
// and make each movie's title all capital letters.
// for (var movie of movies) {
//   var title = movie.title;
//   var upTitled title.toUpperCase();
//   movie.title = upTitled;
// }
// console.log('movies:', movies);

// 2. Loop through the array and find the movie
//with the title Citizen Kane. log its year of release.
// for (var movie of movies) {
//   if movie.title === "Citizen Kane") {
//   console.log(`citizan Kane was released in ${movie.year}`);
// }
// }
// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.
for (var i=0; i<movies.length; i++) {
  console.log(movies[i].title);
  console.log(movies[i].ratings.audience);
}
