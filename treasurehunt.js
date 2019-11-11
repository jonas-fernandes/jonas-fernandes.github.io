var losingNum = Math.floor(Math.random() * 8)
var winningNum = Math.floor(Math.random() * 8)
var counter=0
function tableClick(location){
    counter = counter+1
    if(counter === 4){
        alert("Oh no! You lost.")
        window.location.reload()
        return counter
    }
    if(losingNum === location){
        document.getElementById(location).innerHTML = "☠️"
        alert("Oh no! You lost.")
        window.location.reload()
    }else if(winningNum === location){
        document.getElementById(location).innerHTML = "🏆"
        alert("Congratulations! You found it!")
    }else {
        document.getElementById(location).innerHTML = "😐"
        alert("Try again!")
    }
}
