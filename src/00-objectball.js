function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
}

//This function takes a player's name and returns their points.
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null; // Player not found
}

//This function takes a player's name and returns their shoe size.
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null; // Player not found
}

//This function takes a team name and returns their colors.
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; // Team not found
}

//This function returns an array of the team names.
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

//This function takes a team name and returns an array of jersey numbers.
function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map((player) => player.number);
      }
    }
    return []; // Team not found
}

//This function takes a player's name and returns their stats.
function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null; // Player not found
}

//This function returns the number of rebounds for the player with the largest shoe size.
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (const team in game) {
      for (const player in game[team].players) {
        const playerStats = game[team].players[player];
        if (playerStats.shoe > largestShoeSize) {
          largestShoeSize = playerStats.shoe;
          playerWithLargestShoe = playerStats;
        }
      }
    }
    return playerWithLargestShoe.rebounds;
}
  
//BONUS QUESTIONS
//This function returns the player with the most points.
function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        const playerStats = game[team].players[player];
        if (playerStats.points > mostPoints) {
          mostPoints = playerStats.points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
}

//This function returns the team with the most points.
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (const player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (const player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

//This function returns the player with the longest name.
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
}

//This function checks if the player with the longest name has the most steals.
function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    const game = gameObject();
    let mostSteals = 0;
    let playerWithMostSteals = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        const playerStats = game[team].players[player];
        if (playerStats.steals > mostSteals) {
          mostSteals = playerStats.steals;
          playerWithMostSteals = player;
        }
      }
    }
    return longestNamePlayer === playerWithMostSteals;
}


console.log(numPointsScored("Alan Anderson")); // 22
console.log(shoeSize("Mason Plumlee")); // 19
console.log(teamColors("Charlotte Hornets")); // ["Turquoise", "Purple"]
console.log(bigShoeRebounds()); // 12
console.log(mostPointsScored()); // "Ben Gordon"
console.log(winningTeam()); // "Brooklyn Nets"
console.log(playerWithLongestName()); // "Brendan Haywood"
console.log(doesLongNameStealATon()); // true