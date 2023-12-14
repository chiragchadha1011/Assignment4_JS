// Wait for the HTML document to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Dynamically add student info to the designated element
  document.getElementById("student-info").innerText =
    "Student ID: 200515506, Name: Chirag Chadha";

  // Get the search button element and add a click event listener
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function () {
    // Get the player name from the input field and invoke the searchPlayer function
    const playerName = document.getElementById("searchField").value;
    searchPlayer(playerName);
  });
});

// Function to search for a player using the provided name
function searchPlayer(playerName) {
  // Fetch player data from the API based on the provided name
  fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if player data is available
      if (data.data.length > 0) {
        // If player found, display the player's information
        displayPlayerInfo(data.data[0]);
      } else {
        // If no player found, display a message
        document.getElementById("playerInfo").innerHTML = "No player found.";
      }
    })
    .catch((error) => console.error("Error:", error));
}

// Function to display player information
function displayPlayerInfo(player) {
  // Get the player info container element
  const playerInfoDiv = document.getElementById("playerInfo");
  // Display player information in the container
  playerInfoDiv.innerHTML = `<h2>${player.first_name} ${player.last_name}</h2><p>Team: ${player.team.full_name}</p><p>Position: ${player.position}</p>`;
}
