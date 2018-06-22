<html>

<head>
<script type="text/javascript" src="variables.js"></script>


    <title style="text-align:center" >Play Dots</title>

<style>
.dotvertical {
    background-color:black;
    width:12px;
    height:12px;
    border-radius:20px;
}
.linevertical {
    background-color:lightslategrey;
    height:50px;
    width:10px;
    position:relative;
    left:0px;
}
.dothorizontal{
    background-color:black;
    width:12px;
    height:12px;
    border-radius:15px;
    display: inline-block;

}
.linehorizontal{
    background-color:lightslategrey;
    height:10px;
    width:50px;
    position:relative;
    left:0px;
    display: inline-block;
}

}
.rules{
    max-width: 800px;
    padding:0 50px 0 50px;
    margin-left: auto;
    margin-right: auto;
}
.button {
    display: inline-block;
    padding: 5px 5px;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: darkmagenta;
    border: none;
    width: 250px;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    margin: 10px -125px;
    postion: relative;
    top: 50%;
    left: 50%;
    position: relative;
}
.button:hover {
    background-color: black;
}
.button:active {
    background-color: black;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
tr th {
    width: 50px;
    height: 50px;
    border-bottom: 5px gray solid;
}
tr td {
    width:50px;
    height:50px;
    border-left:5px gray solid;
    border-bottom: 5px gray solid;
}
tr td:nth-last-child(1){
    width:50px;
    height:50px;
    border-right:5px gray solid;
    border-bottom: 5px gray solid;
}
table{
    margin-left: auto;
    margin-right: auto;
}
tr:nth-child(1) td{
    border-top:5px gray solid;
}
html, body {
    height: 100%;
    margin: 0;
}

canvas {
    width: 100%;
    background-color: black;
}

.top-active{
    background-color: green;
    box-shadow: 0 5px #666;
    transform: translateY(4px);


}
.top-hover{
    background-color: black;
}
.top-below{

}

.mystyle {
    width: 100%;
    padding: 25px;
    background-color: coral;
    color: white;
    font-size: 25px;
}





</style>
</head>

<body background="w3s.png">

    <h1 style= "color:black; text-align:center">Play Dots!</h1>
<h2 style="text-align:center">Play an interactive computer science game of Dots now</h2>
<h3 class="rules">  Two players will take turns to join two adjacent
dots with a horizontal or vertical line. When a player completes the fourth
side of a box they must answer a computer science question. If they fail to
answer the question correctly their opposing player gets to answer the question.
    If their opponent answers correctly they get the point. When all the boxes
have been completed the winner is the player who has initialized
the most boxes.</h3>
<!--<button class="button" onclick= BeginGame()>Click Me to Begin</button>-->
<div class="row" id="quotebox">
    <div class="text-center">
    <button class="button" onclick ="randomQuote()"type="submit">Click me to begin</button>
</div>
</div>







<script>
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
</script>






<br>
<br>
<br>

<!--<table>-->

<!--<tbody>-->
<!--<tr>-->
<!--<td id="a1" ></td><td id="a2"></td><td id="a3"></td><td id="a4"></td>-->
<!--</tr>-->
<!--<tr >-->
<!--<td id="b1"></td><td id="b2"></td><td></td><td></td>-->
<!--</tr>-->
<!--<tr>-->
<!--<td></td><td></td><td></td><td></td>-->
<!--</tr>-->
<!--<tr>-->
<!--<td></td><td></td><td></td><td></td>-->
<!--</tr>-->
<!--</tbody>-->
<!--</table>-->





<div id="hor1"
{<div class= "dothorizontal"></div>
    <div class= "linehorizontal"></div>
    <div class= "dothorizontal"></div>
    <div class= "linehorizontal"></div>
    <div class= "dothorizontal"></div>
    <div class= "linehorizontal"></div>
    <div class= "dothorizontal"></div>
    <div class= "linehorizontal"></div>


    <div id="vert1"{
<div class="linevertical"></div>
        <div class="dotvertical"></div>
        <div class = "linevertical"></div>
        <div class="dotvertical"></div>
        <div class = "linevertical"></div>
        <div class="dotvertical"></div>
        <div class = "linevertical"></div>
        <div class = "dotvertical"></div>








        <!--<div id="vert1"-->
        <!--{-->
        <!--<div class="linevertical"></div>-->
        <!--<div class="dotvertical"></div>-->
        <!--<div class="linevertical"></div>-->
        <!--<div class= "dotvertical"></div>-->











        </body>
    </html>