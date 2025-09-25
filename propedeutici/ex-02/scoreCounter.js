export default function gridGenerator(score) {

    let scoreBoard = `
<div id='score-board' style="background-image: url(./assets/cover.png); background-size: cover; display: flex;  justify-content: center;  align-items: center; font-size: 350%; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; color: #292929">
${score}
        
    </div>
`

    document.getElementById("score").innerHTML = scoreBoard



}