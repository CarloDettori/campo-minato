export default function gridGenerator(score, health) {

    const healthBar = []

    for (let i = health; i > 0; i--) {
        healthBar.push("<img src='../assets/heart.png' alt='<3'/>")
    }

    document.getElementById("score").innerHTML = `
<div id='score-board' style="width: 100px;
    height: 100px; background-image: url(./assets/cover.png); background-size: cover; display: flex;  justify-content: center;  align-items: center; font-size: 350%; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; color: #292929">${score}</div>

<div id='health-bar' style='padding-top: 20px; display:flex; height:100px'>${healthBar.map(heart => heart)}</div>
        

`
}