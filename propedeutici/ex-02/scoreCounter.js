export default function gridGenerator(score, health) {

    let healthBar = ""

    for (let i = health; i > 0; i--) {
        healthBar = healthBar + "<img src='../assets/heart.png' alt='<3'/>"
    }

    document.getElementById("score").innerHTML = `

<div id='health-bar' style='padding-bottom: 80px; padding-right: 10px; display:flex; gap:10px; height:100px'>${healthBar}</div>

<div id='score-board' style="width: 100px;
    height: 100px; background-image: url(./assets/cover.png); background-size: cover; display: flex;  justify-content: center;  align-items: center; font-size: 350%; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; color: #292929">${score}</div>


        

`
}