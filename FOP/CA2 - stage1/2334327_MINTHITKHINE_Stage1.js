// Name : MIN THIT KHINE
// Class: DCITP/FT/1A/04
// Adm  : 2334327

// --------------------------------------------------------------------
const process = require('process');
const readline = require('readline-sync');
var exit_program = false;
// Prompt the username

// Expression to check if string contains only char between a-z, A-Z & 0-9
var regex = /^[a-zA-Z0-9\s]+$/;

console.log("\nWelcome to Silver Vintage Movie Review Program");
do {
    var user_name = readline.question("Please enter your name: ");
} while (user_name == '' || !(regex.test(user_name)));

do {
    // Menu
    console.log(`\nHi ${user_name}, please select your choice: `);
    console.log("\t1. Display All Movie");
    console.log("\t2. Coming Soon");
    console.log("\t3. Coming Soon");
    console.log("\t4. Coming Soon");
    console.log("\t5. Coming Soon");
    console.log("\t6. Exit");
    var choice = readline.question("\t>> ");

    var movie1 = new Array("Black Panther: Wakanda Forever 2022", 
                            ["Adventure", "Action", "Drama", "Fantasy", "Sci-Fi", "Thriller"], 
                            161, "11 Nov 2022", [9, 42]);
    
    var movie2 = new Array("Avatar: The Way of Water", ["Adventure" ,"Sci-Fi"], 192, "16 Dec 2022", [4, 15]);

    var movie3 = new Array("Fast X", ["Crime", "Action", "Mystery", "Thriller"], 43, "19 May 2023", [28, 60]);

    var movie4 = new Array("Ant-Man and the Wasp: Quantumania", ["Adventure", "Action"], 120, "16 Feb 2023", [18, 80]);

    var movie5 = new Array("M3GAN", ["Horror", "Mystery", "Thriller"], 102, "6 Jan 2023", [20, 70]);

    var movieList = new Array(movie1, movie2, movie3, movie4, movie5);

    if (choice==1) {
        for (var row=0; row<movieList.length; row++) {
            var movie = movieList[row];

            // Output for Name
            process.stdout.write(`\nName\t\t: ${movie[0]}`);

            // Output for Genre
            process.stdout.write(`\nGenre\t\t: ${(movie[1])}`);

            // Output for Running Time
            const hour = Math.floor(movie[2] / 60);
            const minute = movie[2] % 60;
            process.stdout.write(`\nRunning Time\t: ${hour != 0 && minute != 0 ? `${hour}h ${minute}m` : 
                                                    hour == 0 ? `${minute}m` : `${hour}h`}`);

            // Output for Release Date
            process.stdout.write(`\nRelease Date\t: ${movie[3]}`);

            // Output for Rating
            var total_vote = movie[4][0];
            var rating = movie[4][1];
            var avg = rating / total_vote;
            process.stdout.write(`\nRating\t\t: ${avg.toFixed(1)} (${total_vote} voters)\n`);
        }

    } else if (choice==2) {
        console.log("Sorry, work in progress!");
    } else if (choice==3) {
        console.log("Sorry, work in progress!");
    } else if (choice==4) {
        console.log("Sorry, work in progress!");
    } else if (choice==5) {
        console.log("Sorry, work in progress!");
    } else if (choice==6) {
        console.log("Thank you & goodbye!\n");
        exit_program = true;
    } else {
        console.log("Please enter a valid input.");
    }
} while (exit_program == false);
