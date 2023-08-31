
//let scorehome = 0
//let scoreguest = 0 

//document.getElementById('home').textContent = scorehome
//document.getElementById('guest').textContent = scoreguest

let homeScore = document.getElementById("home")
let score= 0

function onepoint() {
    score += 1
    homeScore.textContent = score
}

function twopoints() {
    score += 2
    homeScore.textContent = score
}

function threepoints() {
    score += 3
    homeScore.textContent = score
}

let guestScore = document.getElementById("guest")
let scoreg = 0

function onepointg() {
    scoreg += 1
    guestScore.textContent = scoreg
}

function twopointsg() {
    scoreg += 2
    guestScore.textContent = scoreg
}

function threepointsg() {
    scoreg += 3
    guestScore.textContent = scoreg
}

// onepoint()
// twopoints()
// threepoints()
// console.log(score)
// console.log("button clicked") -> to test if button works 
