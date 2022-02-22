let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let mgs = ""

function start() {
    if(sum <= 20) msg = "Draw?"
    else if (sum == 21) {
        msg = "Win"
        hasBlackJack = true
    }
    else {
        isAlive = false
        msg = "Lost"
    }
    document.getElementById("isPlaying").textContent = msg
}