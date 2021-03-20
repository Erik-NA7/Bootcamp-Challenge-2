var playerMove = document.getElementsByClassName('player-button')
var comMove = document.getElementsByClassName('com-button')
var statusBanner = document.getElementById("status")
var statusText = document.getElementById("versus")
console.dir(statusBanner, statusText)
// playerMove.addEventListener('click');

function highlight(element) {
  element.style.backgroundColor = "#c4c4c4";
  if (element.id === "player-batu")
    {
      console.log("Player: Batu")
      playerMove[1].disabled = true;
      playerMove[2].disabled = true;
      return element.id;
    };
  if (element.id === "player-kertas")
  {
    console.log("Player: Kertas")
    playerMove[1].disabled = true;
    playerMove[2].disabled = true;
    return element.id;
  };
  if (element.id === "player-gunting")
  {
    console.log("Player: Gunting")
    playerMove[1].disabled = true;
    playerMove[2].disabled = true;
    return element.id;
  };
}

console.log(playerMove)
console.log(comMove)

function computer() {
  const c = Math.floor(Math.random() * (3 - 0) + 0);
  comMove[c].style.backgroundColor = "#c4c4c4";
  if (comMove[c].id === "com-batu")
    {
      console.log(`Computer: Batu`)
      comMove[1].disabled = true;
      comMove[2].disabled = true;
      return comMove[c].id
    };
  if (comMove[c].id === "com-kertas")
  {
    console.log(`Computer: Kertas`)
    comMove[0].disabled = true;
    comMove[2].disabled = true;
    return comMove[c].id
  };
  if (comMove[c].id === "com-gunting")
  {
    console.log(`Computer: Gunting`)
    comMove[0].disabled = true;
    comMove[1].disabled = true;
    return comMove[c].id
  };
};

function matchWinner() {
  if (highlight() === "player-batu" && computer() === "com-batu") {
    statusBanner.style.rotate = "-30deg";
    statusText.innerText = "DRAW";
  };
}


for (let element of playerMove) {
  element.addEventListener("click", () => {
    const p = highlight(element);
    const c = computer();
    console.log(element.onclick)
    if (p === "Batu" && c === "Batu") {
      statusBanner.style.backgroundColor = "red";
    };

    if (p === "Batu" && c === "Kertas") {
      statusBanner.style.backgroundColor = "blue";
    };
    if (p === "Batu" && c === "Gunting") {
      statusBanner.style.backgroundColor = "yellow";
    };
    matchWinner();
  });
};  
// playerMove.forEach(element => element.addEventListener('click');