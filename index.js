let home = 0
let guest = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addHomeOne() {
    console.log("+1 for home pressed")
    home += 1
    homeScore.textContent = home
}

function addHomeTwo() {
    console.log("+2 for home pressed")
    home += 2
    homeScore.textContent = home
}

function addHomeThree() {
    console.log("+3 for home pressed")
    home += 3
    homeScore.textContent = home
}

function addGuestOne() {
    console.log("+1 for guest pressed")
    guest += 1
    guestScore.textContent = guest
}

function addGuestTwo() {
    console.log("+2 for guest pressed")
    guest += 2
    guestScore.textContent = guest
}

function addGuestThree() {
    console.log("+3 for guest pressed")
    guest += 3
    guestScore.textContent = guest
}
