let homeScore = document.getElementById('score-h')
let hScore = 0;
function scoreHome(x = 1) {
    hScore += x
    homeScore.innerText = hScore;
}

let guestScore = document.getElementById('score-g')
let gScore = 0;
function scoreGuest(x = 1) {
    gScore += x
    guestScore.innerText = gScore;
}