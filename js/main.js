const cells = document.querySelectorAll('.cell')
const chris = document.querySelector('.chris')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#timeLeft')

let position;
let scoreValue = 0
let timeLeftValue = null
let moveChris = null
let startCountDown = null

function start(n){
    timeLeftValue = n
    moveChris = setInterval(randomlySpawnChris, 600)
    startCountDown = setInterval(diminuerTime, 1000)
    score.innerHTML = scoreValue
}


cells.forEach(cell=>{
    cell.addEventListener('mousedown',()=>{
        if (cell.id == position){
            scoreValue++
            score.innerHTML = scoreValue
            position = null
        }
    })
})

function randomlySpawnChris(){

    if (!timeLeftValue) return

    cells.forEach(cell=>{
        cell.classList.remove('chris')
    })

    let randomCell = cells[Math.floor(Math.random() * 9)]
    randomCell.classList.add('chris')

    position = randomCell.id
}

function diminuerTime(){

    if (!timeLeftValue) return

    timeLeftValue--
    if (timeLeftValue == 0){
        alert('temps ecoulé ! Votre score est : ' + score.innerHTML);
        scoreValue = 0
        clearInterval(moveChris)
        clearInterval(startCountDown)
    }
    timeLeft.innerHTML = timeLeftValue
}

