// Create the game class
class gameSuit {
  
  // Method for player move
  playerMove(p) {
    this.player = p.attributes[0].value;
    console.log(`Player 1: ${this.player}`);
    p.classList.add("clicked")
  }

  // Method for computer move
  comMove(com) {
    let c = Math.floor(Math.random() * (3 - 0) + 0);
    this.com = com[c].attributes[0].value;
    console.log(`COM: ${this.com}`);
    com[c].classList.add("clicked");
  }

  // Evaluate the result
  result() {  
    if (this.player === this.com) {
      return "DRAW"
    }

    if (this.player === "Batu") {
      if (this.com === "Gunting") {
        return "PLAYER 1"
      } else {
        return "COMPUTER"
      }
    }
    
    if (this.player === "Kertas") {
      if (this.com === "Batu") {
        return "PLAYER 1"
      } else {
        return "COMPUTER"
      }
    }

    if (this.player === "Gunting") {
      if (this.com === "Kertas") {
        return "PLAYER 1"
      } else {
        return "COMPUTER"
      }
    }
  }
}

// Wait until the page is loaded, Initiate DOM
window.addEventListener('load', () => {
  const player = document.getElementsByClassName('player-button');
  const com = document.getElementsByClassName('com-button');
  const displayResult = document.getElementsByClassName("status")[0];
  const refresh = document.getElementById("refresh-game");
  
  // Handle button click (by player) and go through the game flow
  for (let clicked of player) {
    clicked.addEventListener("click", () => {
      let trial = new gameSuit();  
      trial.playerMove(clicked);
      for (button of player) {
          button.disabled = true
        }
      trial.comMove(com);
      displayResult.classList.add("status-result");
      if (trial.result() === "DRAW") {
        displayResult.innerText = trial.result()
        displayResult.classList.add("draw");
        console.log(trial.result());
      } else {
        displayResult.innerText = "";
        let winner = document.createElement('h2');
        winner.innerText = trial.result();
        winner.classList.add("winner");
        let result = document.createElement('h2');
        result.innerText = "WIN";
        result.classList.add("winner");
        displayResult.append(winner);
        displayResult.append(result);
        console.log(`${trial.result()} WIN`);
      };
    });
  };
  
  // Refresh button (reset DOM state)
  refresh.addEventListener('click', () => {
    for (let button of player) {
      button.classList.remove("clicked");
      button.disabled = false;
    };
    for (let cbutton of com) {
      cbutton.classList.remove("clicked");
    }
    displayResult.classList.remove("draw");
    displayResult.classList.remove("status-result");
    displayResult.textContent = "VS";
    console.clear();
  })
});