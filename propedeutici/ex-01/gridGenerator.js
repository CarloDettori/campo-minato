export default function gridGenerator(difficulty) {

    let grid = ""
    let boxNumber = 1
    let rowNumber = 1
    let minedBoxes = []

    //generatore colonne
    for (let i = 1; i <= difficulty; i++) {

        //generatore righe

        let row = ""
        for (let i = 1; i <= difficulty; i++) {
            row = row + `<div id='box-${boxNumber}' class='box'>
            <img src='./assets/cover.png' alt='mine'>
            </div>`
            boxNumber++
        }

        grid = grid + `<div id='row-${rowNumber}' class='row'>${row}</div>`
        rowNumber++
    }

    grid = "<div id='grid-wrapper'>" + grid + "</div>"


    return grid;


}