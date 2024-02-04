score = 0

audio = new Audio(`music/music.mp3`)
goaudio = new Audio(`music/gameover.mp3`)
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    // console.log("key code is ", e.keyCode)

    if (e.keyCode == 38) {
        player = document.querySelector(`#player`)
        player.classList.add(`playerjum`)
        setTimeout(() => {
            player.classList.remove(`playerjum`)

        }, 500);
    }
    if (e.keyCode == 39){
        player = document.querySelector(`#player`)
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
        player.style.left = px + 100 + "px"
    }
    if (e.keyCode == 39){
        player = document.querySelector(`#player`)
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
        player.style.left = px + 30 + "px"
    }
    if (e.keyCode == 37){
        player = document.querySelector(`#player`)
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`))
        player.style.left = (px - 30) + "px"
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
    // console.log("x:",x,"y:",y);
    if (x<80 && y<60){
        gameover.innerHTML = "Game Over - Reload To Play Again"
        enemy.classList.remove(`enemyani`)
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
    
    if (gameover.innerHTML != "Game Over - Reload To Play Again"){
        score+=1
        scr=document.querySelector(`#score`)
        scr.innerHTML = "Time Played: "+ score +"sec"
    }
    

}, 1000);

setInterval(() => {
    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue(`left`))
    enemy = document.querySelector(`.enemy`)
    aniDur = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue('animation-duration'));
    if (ex<10 && ex>0 && aniDur>3){
        newdur = aniDur - .1
        enemy.style.animationDuration = newdur +"s"
        // console.log(newdur);
    }

}, 10);    

