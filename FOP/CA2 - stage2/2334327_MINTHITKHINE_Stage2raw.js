// Name : MIN THIT KHINE
// Class: DCITP/FT/1A/04
// Adm  : 2334327

// --------------------------------------------------------------------
const Movie = require('./movie_data.js');
const readline = require('readline-sync');
var exit_program = false;

// Prompt the username
// Expression to check if string contains only char between a-z, A-Z & 0-9
var regex = /^[a-zA-Z0-9\s]+$/;
console.log("\nWelcome to Silver Vintage Movie Review Program");
do {
    var user_name = readline.question("Please enter your name: ");
} while(user_name == '' || !(regex.test(user_name)));

// Default Values
const movie1 = new Movie("Black Panther: Wakanda Forever 2022", 
                        ["Adventure", "Action", "Drama", "Fantasy", "Sci-Fi", "Thriller"], 
                        161, "11 Nov 2022", [9, 42]);
const movie2 = new Movie("Avatar: The Way of Water", ["Adventure" ,"Sci-Fi"], 192, "16 Dec 2022", [4, 15]);
const movie3 = new Movie("Fast X", ["Crime", "Action", "Mystery", "Thriller"], 43, "19 May 2023", [28, 60]);
const movie4 = new Movie("Ant-Man and the Wasp: Quantumania", ["Adventure", "Action"], 120, "16 Feb 2023", [18, 80]);
const movie5 = new Movie("M3GAN", ["Horror", "Mystery", "Thriller"], 102, "6 Jan 2023", [20, 70]);
// ____________________________________________________________________________________________________________________
var movieList = new Array(movie1, movie2, movie3, movie4, movie5);

do {
    var pattern = /^[0-9]+$/;
    // Menu
    console.log(`\nHi ${user_name}, please select your choice: `);
    console.log("\t1. Display All Movie");
    console.log("\t2. Add Movie");
    console.log("\t3. Add Rating");
    console.log("\t4. Latest 3 Release Date");
    console.log("\t5. Filter by Genre");
    console.log("\t6. Exit");
    var choice = readline.question("\t>> ");

    if(choice==1) {
        for (var i=0; i<movieList.length; i++){
            console.log(`\n${movieList[i].displayMovieDetails()}`);
        }
    } else if(choice==2) {
        // Menu
        do {
            var valid = false;
            var movie_name = readline.question("\n\tPlease enter Movie's name: ");
            for (var i=0; i<movieList.length; i++) {
                var name = movieList[i].Name;
                if(movie_name.toLowerCase() == name.toLowerCase() || movie_name == "") {
                    console.log("\tPlease enter a unique movie name!");
                    valid = false;
                    break;
                } else {
                    valid = true;
                }
            }
        } while(valid == false);
        do {
            var valid = false;
            var gerne = new Array();

            console.log("\n\tPlease enter Movie's gerne(s):")
            console.log("\t1) Action");
            console.log("\t2) Adventure");
            console.log("\t3) Crime");
            console.log("\t4) Drama");
            console.log("\t5) Fantasy");
            console.log("\t6) Horror");
            console.log("\t7) Mystery");
            console.log("\t8) Sci-Fi");
            console.log("\t9) Thriller");
            var gerne_choice = readline.question("\t>> ");

            var gerne_num = gerne_choice.split(/[ ,]+/);
            for(var i = 0; i < gerne_num.length; i++) {
                if(pattern.test(gerne_num[i])) {
                    if(gerne_num[i] >= 1 && gerne_num[i] <= 9) {
                        valid = true;
                    } else {
                        console.log("\tPlease enter valid gerne option(s)!");
                        valid = false;
                        break;
                    }
                } else {
                    console.log("\tPlease enter valid gerne option(s)!");
                    valid = false;
                    break;
                }
            }
            if(valid == true) {
                i = 0;
                while(i <= 9) {
                    switch(gerne_num[i]) {
                        case "1": gerne.push("Action"); break;
                        case "2": gerne.push("Adventure"); break;
                        case "3": gerne.push("Crime"); break;
                        case "4": gerne.push("Drama"); break;
                        case "5": gerne.push("Fantasy"); break;
                        case "6": gerne.push("Horror"); break;
                        case "7": gerne.push("Mystery"); break;
                        case "8": gerne.push("Sci-Fi"); break;
                        case "9": gerne.push("Thriller"); break;
                        default: break;
                    }
                    i++;
                }
            }
            // Test Case
            // console.log(gerne)
        } while(valid == false);
        var Release_date = readline.question("\n\tPlease enter Movie's release date: ");
        do {
            var valid = false;
            var Running_time = readline.question("\n\tPlease enter Movie's running Time (min):");
            if(pattern.test(Running_time)) {
                valid = true;
            } else {
                console.log("\tPlease enter valid running time!");
            }
        } while(valid == false);
        // Add to MovieList Array
        var movie = new Movie(movie_name, gerne, Running_time, Release_date, [0, 0]);
        movieList.push(movie);
    } else if(choice==3) {
        do {
            var valid = false;
            var i;
            console.log("\n\tSelect the movie to add a rating:");
            for(i=0; i<movieList.length; i++) {
                console.log(`\t${i+1}) ${movieList[i].Name}`);
            }
            console.log(`\t${i+1}) Go Back to Main Menu`);
            var rating_choice = readline.question("\t>> ");
            if(pattern.test(rating_choice)) {
                if(parseInt(rating_choice) >= 1 && parseInt(rating_choice) < i+1) {
                    valid = true;
                } else if(parseInt(rating_choice) == i+1) {
                    break;
                } else {
                    console.log("\n\tKindly enter a valid input!");
                    valid = false;
                }
            } else {
                console.log("\n\tKindly enter a valid input!");
                valid = false;
            }
        } while(valid == false);
        do {
            if(parseInt(rating_choice) != i+1) {
                var valid = false;
                var rating = readline.question(`\n\tEnter your rating for "${movieList[rating_choice-1].Name}" (1 to 5 inclusive): `);
                if(pattern.test(rating)) {
                    if(rating >= 1 && rating <= 5) {
                        valid = true;
                    } else {
                        console.log("\n\tEnter a valid rating!");
                        valid = false;
                    }
                } else {
                    console.log("\n\tEnter a valid rating!");
                    valid = false;
                }
            } else {
                break;
            }
        } while(valid == false);
        if(parseInt(rating_choice) != i+1) {
            movieList[rating_choice-1].Rating[0] += 1;
            movieList[rating_choice-1].Rating[1] += parseInt(rating);
        }
    } else if(choice==4) {
        console.log("\n\tThe latest 3 movies are:");
        var latestDates = new Array();
        for(var i=0; i<movieList.length; i++) {
            var movie = movieList[i];
            var movieDate = new Date(movie.Release_date);
            if(latestDates.length < 3) {
                latestDates.push({date: movieDate, index: i})
            } else {
                latestDates.sort(function(a, b) {
                    return b.date - a.date;
                });
                if(movieDate > latestDates[latestDates.length - 1].date) {
                    latestDates.pop();
                    latestDates.push({date: movieDate, index: i});
                }
            }
        }
        for (var i=0; i<latestDates.length; i++) {
            console.log(`\t${i+1}) ${movieList[latestDates[i].index].Release_date} - ${movieList[latestDates[i].index].Name}`);
        }
    } else if(choice==5) {
        do {
            valid = false;
            console.log("\n\tPlease select a gerne:");
            console.log("\t1) Action");
            console.log("\t2) Adventure");
            console.log("\t3) Crime");
            console.log("\t4) Drama");
            console.log("\t5) Fantasy");
            console.log("\t6) Horror");
            console.log("\t7) Mystery");
            console.log("\t8) Sci-Fi");
            console.log("\t9) Thriller");
            var filter_choice = readline.question("\t>> ");
            if(pattern.test(filter_choice)) {
                if(filter_choice >= 1 && filter_choice <= 9){
                    valid = true;
                } else {
                    console.log("\tPlease enter a valid gerne input!");
                    valid = false;
                }
            } else {
                console.log("\tPlease enter a valid gerne input!");
                valid = false;
            }
        } while(valid == false)
        var gerne = "", num = 1;
        switch(filter_choice) {
            case "1": gerne = "Action"; break;
            case "2": gerne = "Adventure"; break;
            case "3": gerne = "Crime"; break;
            case "4": gerne = "Drama"; break;
            case "5": gerne = "Fantasy"; break;
            case "6": gerne = "Horror"; break;
            case "7": gerne = "Mystery"; break;
            case "8": gerne = "Sci-Fi"; break;
            case "9": gerne = "Thriller"; break;
            default: break;
        }
        console.log(`\n\tYou have selected "${gerne}" genre:`)
        for(var i=0; i<movieList.length; i++) {
            var temp_genre = movieList[i].Genre;
            for(var j=0; j<temp_genre.length; j++) {
                if(temp_genre[j] == gerne) {
                    console.log(`\t${num++}) ${movieList[i].Name}`);
                }
            }
        }
    } else if(choice==6) {
        console.log("Thank you & goodbye!\n");
        exit_program = true;
    } else {
        console.log("Please enter a valid input.");
    }
} while(exit_program == false);
