import { fifaData } from './fifa.js';

console.log("Original data set:");
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log("Task 1 output:");

for (let i = 0; i < fifaData.length; i++) {

    if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {

        console.log(fifaData[i]["Home Team Name"]);
        console.log(fifaData[i]["Away Team Name"]);
        console.log(fifaData[i]["Home Team Goals"]);
        console.log(fifaData[i]["Away Team Goals"]);

        break;

    };

};


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter((finals) => {
        return finals.Stage === "Final";
    });

};

console.log("getFinals output:");
console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cbf) {

    const years = [];
    
    cbf.map((yrs) => {
        years.push(yrs.Year);
    });

    return years;

};

console.log("getYears output:")
console.log(getYears(getFinals(fifaData)));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cbf) {

    const winners = [];
    
    cbf.forEach(function(element) {
        if (element["Home Team Goals"] > element["Away Team Goals"]){
            winners.push(element["Home Team Name"]);
        }
        else if (element["Home Team Goals"] < element["Away Team Goals"]){
            winners.push(element["Away Team Name"]);
        }
        else {
            winners.push(element["Win conditions"].split(" ")[0]);
        }
    });

    return winners;

};

console.log("getWinners output:");
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(cbfW, cbfY) {

    // Tried a lot of stuff. Not sure how to resolve the issues I ran into. (cbfY appears to always be undefined and I can't get it to resolve.)
    // Solutions on stackoverflow seem to suggest Promises, async, etc. Don't think that's right since that's out of the scope of this class right now.

    const winners = cbfW;
    const years = cbfY;

    console.log(winners);
    console.log(years);

    return "test";

};

console.log("getAllWinners output:");
console.log(getAllWinners(getWinners(getFinals(fifaData))), getYears(getFinals(fifaData)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {

    const winners = getWinners(getFinals(data));
    let teamName = null;

    // Find team name from initials.
    for (let i = 0; i < data.length; i++) {

        if (data[i]["Home Team Initials"] === initials) {
            teamName = data[i]["Home Team Name"];
            break;
        }
        else if (data[i]["Away Team Initials"] === initials) {
            teamName = data[i]["Away Team Name"];
            break;
        }

    } // Team name will be found this way unless it doesn't exist.

    const wins = winners.filter((val) => {
        return val === teamName;
    });
    
    return wins.length;

};

console.log("getCountryWins output (for ARG):");
console.log(getCountryWins(fifaData, "ARG"));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

console.log("getGoals output:");
console.log();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

console.log("badDefense output:");
console.log();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const vals = data.reduce((val, obj) => {
        val["Home"] += obj["Home Team Goals"];
        val["Away"] += obj["Away Team Goals"];
        return val;
    }, {"Home":0,"Away":0});
    
    vals["Home"] = vals["Home"] / (data.length + 1);
    vals["Away"] = vals["Away"] / (data.length + 1);

    return vals;

};

console.log("getAverageGoals output:");
console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */