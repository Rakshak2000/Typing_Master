window.addEventListener('load', init)

let currentWords = document.querySelector("#current-word")
let wordInput = document.querySelector("#word-input")
let timeDisplay = document.querySelector("#time")     //id's as # is added
let scoreDisplay = document.querySelector("#score")   //in place of query selector-   get element by id can also use
let message = document.querySelector("#message")
let score = 0;
let time = 6



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
]

function init() {
    showWords(words)
    wordInput.addEventListener("input", startMatch)
    setInterval(countDown, 1000)
}

function countDown() {
    if (time > 0) {
        time--
    } else if (time == 0) {
        time = 0
        message.innerHTML = "!!GAME OVER!!"
    }
    timeDisplay.innerHTML = time

}





function startMatch() {
    if (matchWord()) {
        wordInput.value = ''
        showWords(words)
        score++;
        time = 6
    }
    scoreDisplay.innerHTML = score

}

function matchWord() {
    if (currentWords.innerHTML == wordInput.value) {
        message.innerHTML = "Correct!!!"
        return true
    }
    else {
        message.innerHTML = ""
        return false
    }

}




function showWords(words) {
    const randIndex = Math.floor(Math.random() * words.length)
    currentWords.innerHTML = words[randIndex]
}




//page on loading creates the movement of content