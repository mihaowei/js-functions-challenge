var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

// YOUR CODE HERE
function Team(name) {
  this.name = name;
  this.rank = null;
  this.wins = 0;
  this.losses = 0;
};

var teamNames = function() {
  var teamArray = [];
  for (var i = 0; i < gameInfo().length; i++) {
    if (!teamArray.includes(gameInfo()[i].home_team)) {
      teamArray.push(gameInfo()[i].home_team);
    };
    if (!teamArray.includes(gameInfo()[i].away_team)) {
      teamArray.push(gameInfo()[i].away_team);
    };
  };
  var teamObjects = [];
  for (var i = 0; i < teamArray.length; i++) {
    teamObjects.push(new Team(teamArray[i]));
  }
  for (var i= 0; i < gameInfo().length; i++) {
    for (var n = 0; n < teamObjects.length; n++) {
      if (teamObjects[n].name == gameInfo()[i].home_team) {
        if (gameInfo()[i].home_score > gameInfo()[i].away_score) {
          teamObjects[n].wins += 1;
        } else {
          teamObjects[n].losses += 1;
        }
      } else if (teamObjects[n].name == gameInfo()[i].away_team) {
        if (gameInfo()[i].away_score > gameInfo()[i].home_score) {
          teamObjects[n].wins += 1;
        } else {
          teamObjects[n].losses += 1;
        }
      }
    }
  };

  // sorts by losing team, placing team with most losses at end
  function compare(a,b) {
    if (a.losses < b.losses)
      return -1;
    if (a.losses > b.losses)
      return 1;
    return 0;
  };

  teamObjects.sort(compare);

  // assign ranks by order of appearance in the array
  for (var i = 0; i < teamObjects.length; i++) {
    teamObjects[i].rank = i + 1;
  };
  return teamObjects;
};

var summary = function() {
  var finalTeamObj = teamNames();

  var htmlString = "<table border='1px'><thead><tr><th>Name</th><th>Rank</th><th>Total Wins</th><th>Total Losses</th></tr></thead><tbody>";

  for (var i = 0; i < finalTeamObj.length; i++) {
  htmlString += "<tr><td>" + finalTeamObj[i].name + "</td><td>" + finalTeamObj[i].rank + "</td><td>" + finalTeamObj[i].wins + "</td><td>" + finalTeamObj[i].losses + "</td></tr>";};

  htmlString += "</tbody></table>";

  return htmlString;
};

document.write(summary());
