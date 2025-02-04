let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let player = {
    name: 'ysf',
    chips: 69
}

let msgEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function randomNumber(){
    let rand = Math.floor(Math.random()*13)+1
    // if 1     -> return 11
    if (rand === 1) {return 11}
    // if 11-13 -> return 10
    else if (rand === 13 ||rand === 12 ||rand === 13) {return 10}
    else {return rand}
}

function startGame(){
    if (sum === 0) {
        let firstCard = randomNumber()
        let secondCard = randomNumber()
        sum = firstCard + secondCard
        isAlive = true
        cards = [firstCard, secondCard]
        newDraw()
    }
}

function newDraw(){
    cardEl.textContent = 'Cards: '
    for (let i = 0;i < cards.length;i+=1){
        cardEl.textContent += cards[i] + ' '
    }
    if (sum <= 20) {
        
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true 
    } 
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    msgEl.textContent = message
    // cardEl.textContent = 'Cards:'
}

function newCard(){
    if (hasBlackJack === false && isAlive){
        let newCrd = randomNumber()
        sum += newCrd
        sumEl.textContent = 'Sum: ' + sum
        cards.push(newCrd)
        newDraw()
    }
}
