import gridGenerator from "../propedeutici/ex-01/gridgenerator.js";

document.getElementById('app').innerHTML = `
    <section>
        <h1>Campo Minato</h1>
        <div id="game-board">${gridGenerator(7)}
        </div>
        <div id="score"></div>
    </section>
`;

const difficulty = 7;
const minedBoxes = []

while (minedBoxes.length <= 15) {

    let x = Math.floor((Math.random() * (difficulty * difficulty) + 1));

    if (minedBoxes.includes(x)) { } else { minedBoxes.push(x) }

}


minedBoxes.forEach(minedBox => document.getElementById("mine-container-" + minedBox).innerHTML = `<img id='mine-${minedBox}' class='mine' style='padding: 20px' src='./assets/mine.png' alt='mine'>`)

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("cover")) {
        event.target.style.display = "none";

        const boxId = event.target.id.replace("cover-", "");
        const boxNum = parseInt(boxId);

        // Se la box NON contiene una mina, mostra il numero di mine vicine
        const mineContainer = document.getElementById(`mine-container-${boxNum}`);
        if (!mineContainer.querySelector(".mine")) {
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
        }
    }
})



