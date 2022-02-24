let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let mgs = ""
let sumContent = document.querySelector("#sum")
let player = {
    name: "Arjun",
    chips: 145
}
document.getElementById("status").textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let n = Math.floor(Math.random() * 13 + 1)
    if(n > 10) return 10
    else if(n == 1) return 11
    else return n
}

function start() {
    if(sum == 0) {
        cards.push(getRandomCard())
        cards.push(getRandomCard())
        sum += cards[0] + cards[1]
        isAlive = true
        renderGame()
    }
}

function renderGame() {
    if(sum <= 20) msg = "Draw?"
    else if (sum == 21) {
        msg = "Win"
        hasBlackJack = true
    }
    else {
        isAlive = false
        msg = "Lost"
    }
    sumContent.textContent = "Sum: " + sum
    document.getElementById("isPlaying").textContent = msg
    let cardEl = document.querySelector("#cards")
    cardEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++)
        cardEl.textContent += cards[i] + " " 
}
function draw() {
    if(isAlive == true && hasBlackJack == false){    
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
        console.log("Draws a new card")
    }
}
