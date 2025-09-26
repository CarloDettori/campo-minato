export default function gridGenerator(difficulty) {

    let grid = ""
    let boxNumber = 1
    let rowNumber = 1

    //generatore colonne
    for (let i = 1; i <= difficulty; i++) {

        //generatore righe

        let row = ""
        for (let i = 1; i <= difficulty; i++) {
            row = row + `
            <div style='display: flex; border: 1px solid #292929; margin: 0; width: 70px; position: relative; background-color: #757575;background-size: cover' id='box-${boxNumber}' class='box'>
            <div style="color: #fcfcfc; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; margin: auto" id='mine-container-${boxNumber}' class='mine-container'> </div>
            <img id='cover-${boxNumber}' class='cover' style='position: absolute; cursor:pointer'  src='./assets/cover.png' alt='mine'>
            </div>`
            boxNumber++
        }

        grid = grid + `<div id='row-${rowNumber}' class='row' style='display: flex;'>${row}</div>`
        rowNumber++
    }

    document.getElementById("game-board").innerHTML = "<div id='frame' style='display: flex; flex-direction: column; border: 30px solid #bababa;'><div style ='border: 1px solid #292929'>" + grid + "</div></div>"




}