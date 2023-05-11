$.getJSON(
    "https://statsapi.web.nhl.com/api/v1/schedule", 
        function mlbData(data) {
        console.log(data);
        



        var todayDate = data.dates[0].date;
        $('.todayDate').append(todayDate);


        for (var i = 0; i < data.dates[0].games.length; i++){
            var games = data.dates[0].games[i];
            //console.log(games) 
            var awayTeam = games.teams.away.team.name;
            var awayScore = games.teams.away.score;
            var homeTeam = games.teams.home.team.name;
            var homeScore = games.teams.home.score;
            //console.log(awayTeam + ' ' + awayScore + ' vs ' + homeTeam + ' ' + homeScore)
            var vs = awayTeam + ' ' + awayScore + ' at ' + homeTeam + ' ' + homeScore + '<br>';
            
            $('.games').append(vs);
            }
        







        


    }
);