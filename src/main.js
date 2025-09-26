import gridGenerator from "../propedeutici/ex-01/gridgenerator.js";
import scoreCounter from "../propedeutici/ex-02/scoreCounter.js"

let difficulty = 7;



function startGame() {

    document.getElementById("play-grownd").innerHTML = `
        <div id="game-board" style=' background-image: url(../assets/cover.png); background-size: cover; aspect-ratio: 1/1; padding: 30px;' ></div>
        <div id="score"></div>
    `
    let health = 5
    let score = 0
    const minedBoxes = []

    gridGenerator(difficulty)
    scoreCounter(score, health)

    while (minedBoxes.length <= 15) {

        let x = Math.floor((Math.random() * (difficulty * difficulty) + 1));

        if (minedBoxes.includes(x)) { } else { minedBoxes.push(x) }

    }

    minedBoxes.forEach(minedBox => document.getElementById("mine-container-" + minedBox).innerHTML = `<img id='mine-${minedBox}' class='mine' src='./assets/mine.png' alt='mine'>`)

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("cover")) {
            event.target.style.display = "none";

            const boxId = event.target.id.replace("cover-", "");
            const boxNum = parseInt(boxId);

            // Se la box NON contiene una mina, mostra il numero di mine vicine
            const mineContainer = document.getElementById(`mine-container-${boxNum}`);
            if (!mineContainer.querySelector(".mine")) {
                score++
                scoreCounter(score, health)
                const row = Math.ceil(boxNum / difficulty);
                const col = ((boxNum - 1) % difficulty) + 1;

                const adjacent = [];
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0) continue;
                        const r = row + dr;
                        const c = col + dc;
                        if (r >= 1 && r <= difficulty && c >= 1 && c <= difficulty) {
                            const adjNum = (r - 1) * difficulty + c;
                            adjacent.push(adjNum);
                        }
                    }
                }

                const mineCount = adjacent.filter(n => minedBoxes.includes(n)).length;
                mineContainer.textContent = mineCount > 0 ? mineCount : "";
            } else {
                health--;
                scoreCounter(score, health);
                if (health === 0) {
                    document.getElementById("frame").innerHTML = `<h1> GAME OVER </h1>
    <button type='button' onClick='startGame()'>RETRY</button>
    `
                } else if (score === difficulty * difficulty - 16) {
                    document.getElementById("frame").innerHTML = `<h1> VICTORY </h1>
    <button type='button' onClick='startGame()'>PLAY AGAIN</button>
    `
                }

            }
        }
    })




}



window.startGame = startGame;

document.getElementById('app').innerHTML = `
    <section>

        <h1>CAMPO MINATO</h1>

        <div id='play-grownd' style='display: flex; gap: 30px; margin: 30px'> 
        <div>
            <label for="cars">Scegli una difficoltà</label>

            <select name="difficulty" id="difficulty" onChange='difficulty = select.value'>
                <option value=10>Facile</option>
                <option value=9>Medio</option>
                <option selected value=7>Difficile</option>
            </select>
        </div>
        <button type='button' onClick='startGame()'>START</button>
        </div>
    </section>
        

`;

document.getElementById("difficulty").addEventListener("change", function (e) {
    difficulty = parseInt(e.target.value);
});