
// var hl = [
//     {col:1 row:1} ,{col:2, row:1}];
// var vl = [{row:1 col:1},{row:1 col:2}];

function generateCells(numCol, numRow){
    var cells = [];
    for(var col =0; col<numCol; col++){
        for(var row =0; row<numRow; row++){
            cells.push({
                col:col,
                row:row,
                filled:false,
                owner:""

            })
        }

    }
    return cells;
};
//console.info(generateCells(4, 4));//Test

function generateHorizontal(numCol,numRow){
    var cells = [];
    for(var col =0; col<numCol; col++){
        for(var row =0; row<=numRow; row++){
            cells.push({
                col:col,
                row:row,
                filled:false,

            })
        }

    }
    return cells;
};
//console.info(generateHorizontal(4, 3));//Test

function generateVertical(numCol,numRow){
    var cells = [];
    for(var col =0; col<=numCol; col++){
        for(var row =0; row<numRow; row++){
            cells.push({
                col:col,
                row:row,
                filled:false,

            })
        }

    }
    return cells;
};
console.info(generateVertical(2, 2));//Test


var $quoteBox = document.getElementById('quotebox');
var quotesList = [
    {
        quote: "Player 1",
    }
];
function randomQuote() {
    var randIdx = Math.floor(Math.random() * quotesList.length);
    var randQuote = quotesList[randIdx];
    $quoteBox.setAttribute('style','font-size: 25px; color: darkmagenta; text-align:center;');
    $quoteBox.innerHTML = "Player 1, please take your turn to begin";
}



function changeClassStyle(){
    var c = document.getElementsByClassName("linevertical");
    for (var i=0; i<c.length; i++) {
        c[i].style.color = "red";
    }
}

function typeOfLine(userSelection){
    if(userSelection.equals("linevertical")){

    }
}


function checkLinesAround(cell){
    //implement more code to know whether the lines are all active
        if(allLines.equals("active")){
            if(playerTurn.equals("p1")){
                p1points++;}
            else{
                p2points++;}
        }
}
A
function checkCells(cells){
    generateCells(5, 4)
    for(var row=0; row<cells.length;row++){
        for(var col=0; col<cells[0].length; col++){
            if(row.equals("filled") && col.equals("filled"){
                filledElements(cell
            }
        }
    }
}

