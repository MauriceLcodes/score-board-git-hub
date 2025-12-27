let homePoints = document.getElementById("points-home")
let guestPoints = document.getElementById("points-guest")

let startScoreHome = 0
let startScoreGuest = 0

function addGuest1(){
    startScoreGuest += 1
    guestPoints.textContent = startScoreGuest
}
function addGuest2(){
    startScoreGuest += 2
    guestPoints.textContent = startScoreGuest
}
function addGuest3(){
    startScoreGuest += 3
    guestPoints.textContent = startScoreGuest
}

function addHome1(){
    startScoreHome += 1
    homePoints.textContent = startScoreHome
}
function addHome2(){
    startScoreHome += 2
    homePoints.textContent = startScoreHome
}
function addHome3(){
    startScoreHome += 3
    homePoints.textContent = startScoreHome
}

function newGame(){
    startScoreHome = 0
    startScoreGuest = 0
    homePoints.textContent = startScoreHome
    guestPoints.textContent = startScoreGuest
}