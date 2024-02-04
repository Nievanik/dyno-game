let score = 0

const audio = new Audio(`music/music.mp3`)
const goaudio = new Audio(`music/gameover.mp3`)
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {

    if (e.keyCode == 38) {
        player = document.querySelector(`.player`)
        player.classList.add(`playerjum`);
        setTimeout(() => {
            player.classList.remove(`playerjum`)
        }, 500);
    }
  
    if (e.keyCode == 39){
        player = document.querySelector(`#player`)
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
        player.style.left = px + 150 + "px"
    }
    if (e.keyCode == 37){
        player = document.querySelector(`#player`)
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
        player.style.left = (px - 50) + "px"
    }
}

setInterval(() => {
    player = document.querySelector(`#player`)
    enemy = document.querySelector(`.enemy`)
    gameover = document.querySelector(`#gameover`)

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue(`top`))

    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue(`left`))
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue(`top`))
    // console.log(px,ex)
    x = Math.abs(px - ex)
    y = Math.abs(py - ey)


    // Game Over Condition Check
    if (x<80 && y<60){
        
        gameover.innerHTML = "Game Over - Reload To Play Again";
        enemy.classList.remove(`enemyani`)

        player = document.querySelector(`#player`)
        player.classList.add(`playerdie`)
        
        audio.pause()
        goaudio.play()
        setTimeout(() => {
            goaudio.pause()
        }, 1000);
    }
   
}, 10);

setInterval(() => {
    px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue(`left`))
    enemy = document.querySelector(`.enemy`)
    
    if (gameover.innerHTML != "Game Over - Reload To Play Again"){
        score+=1
        scr=document.querySelector(`#score`)
        scr.innerHTML = "Time Played: "+ score +"sec"
    }
    if (score==18){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '5s'
        }, 1000);
        jumpRemoveInterval = 400;
    }
    if (score==34){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '4s'
        }, 1000);
        jumpRemoveInterval = 500;
        
    }
    if (score==51){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '3s'
        }, 1000);
        jumpRemoveInterval = 400;

    }
    if (score==67){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '2s'
        }, 1000);
        jumpRemoveInterval = 300;
    }
    if (score==80){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '1s'
        }, 1000);
    }
    if (score==96){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '.75s'
        }, 1000);
    }
    if (score==109){
        enemy.classList.remove('enemyani')
        enemy.style.left = '110vw'
        setTimeout(() => {
            enemy.classList.add('enemyani')
            enemy.style.animationDuration = '.5s'
        }, 1000);
    }
}, 1000);




 

