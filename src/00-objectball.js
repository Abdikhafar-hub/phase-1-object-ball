function numPointsScored(gameStats, playerName) {
    const player = gameStats.players.find(p => p.name === playerName);
    return player ? player.points : 0;
  }
  const gameStats = {
    players: [
      { name: 'Alice', shoeSize: 8 },
      { name: 'Bob', shoeSize: 10 },
      { name: 'Charlie', shoeSize: 9 },
    ],
  };
  const teams = {
    teams: [
      { name: 'Lakers', colors: ['Purple', 'Gold'] },
      { name: 'Warriors', colors: ['Blue', 'Gold'] },
      { name: 'Celtics', colors: ['Green', 'White'] },
    ],
  };
  const game = {
    teams: [
      { name: 'Lakers', colors: ['Purple', 'Gold'] },
      { name: 'Warriors', colors: ['Blue', 'Gold'] },
      { name: 'Celtics', colors: ['Green', 'White'] },
    ],
  };
  const game = {
    teams: [
      {
        name: 'Lakers',
        players: [
          { name: 'LeBron James', jerseyNumber: 23 },
          { name: 'Anthony Davis', jerseyNumber: 3 },
          { name: 'Russell Westbrook', jerseyNumber: 0 },
        ],
      },
      {
        name: 'Warriors',
        players: [
          { name: 'Stephen Curry', jerseyNumber: 30 },
          { name: 'Klay Thompson', jerseyNumber: 11 },
          { name: 'Draymond Green', jerseyNumber: 23 },
        ],
      },
      {
        name: 'Celtics',
        players: [
          { name: 'Jayson Tatum', jerseyNumber: 0 },
          { name: 'Jaylen Brown', jerseyNumber: 7 },
          { name: 'Marcus Smart', jerseyNumber: 36 },
        ],
      },
    ],
  };
  async function fetchPlayerStats(playerName) {
    const response = await fetch(`https://api.example.com/player-stats?name=${playerName}`);
    const data = await response.json();
    return data;
  }
  
  function playerStats(playerName) {
    return fetchPlayerStats(playerName)
      .then(stats => stats)
      .catch(error => `Error fetching stats for ${playerName}: ${error.message}`);
  }
  const playersData = {
    'LeBron James': { shoeSize: 15, rebounds: 7.4 },
    'Stephen Curry': { shoeSize: 13, rebounds: 4.6 },
    'Giannis Antetokounmpo': { shoeSize: 17, rebounds: 11.8 },
    'Kobe Bryant': { shoeSize: 14, rebounds: 5.2 },
    // Add more players as needed
  };
  
  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoe = '';
  
    for (const player in playersData) {
      if (playersData[player].shoeSize > largestShoeSize) {
        largestShoeSize = playersData[player].shoeSize;
        playerWithLargestShoe = player;
      }
      console.log(`Checked ${player}: Shoe Size = ${playersData[player].shoeSize}`);
    }
  
    console.log(`Player with the largest shoe size: ${playerWithLargestShoe} (Shoe Size: ${largestShoeSize})`);
  
    if (playerWithLargestShoe) {
      return playersData[playerWithLargestShoe].rebounds;
    } else {
      return 'No players found.';
    }
  }
  
  
  