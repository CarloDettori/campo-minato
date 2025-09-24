import gridGenerator from "../propedeutici/ex-01/gridgenerator.js";

document.getElementById('app').innerHTML = `
    <section>
        <h1>Campo Minato</h1>
        <div id="game-board">${gridGenerator(7)}</div>
        <div id="score"></div>
    </section>
`;

const difficulty = 7;
for (let i = 1; i <= 16; i++) {
    let x = Math.floor((Math.random() * (difficulty * difficulty) + 1));
    const boxId = `box-${x}`;
    const box = document.getElementById(boxId);
    if (box) {
        box.innerHTML = "<img style='padding: 20px' src='./assets/mine.png' alt='mine'>";
    }
}