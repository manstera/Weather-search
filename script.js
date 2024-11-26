const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];

let currentKeyIndex = 0;

const keyElement = document.getElementById('key');
const newGameBtn = document.getElementById('newGameBtn');

function randomKey (){
    currentKeyIndex = Math.floor(Math.random() * keys.length)
    keyElement.textContent = keys[currentKeyIndex]
}

function keyDown (event){
    if(event.key === keys[currentKeyIndex]){
        randomKey()
    }else{
        pNotify.error({
            text:`It's not correct`, 
            delay: 2000
        })
    }
}

function keyPress(event){
    event.preventDefault()
}

function newGame (){
    randomKey()
}

window.addEventListener("keydown", keyDown)
window.addEventListener("keypress", keyPress)
newGameBtn.addEventListener("click", newGame)
newGame()