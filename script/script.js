
// Amount of Snowflakes
var snowMax = 40;

// Snowflake Colours
var snowColor = ["#abe0d8", "#82ada6"];

// Snow Entity
var snowEntity = "&#x2022;";

// Falling Velocity
var snowSpeed = 0.75;

// Minimum Flake Size
var snowMinSize = 8;

// Maximum Flake Size
var snowMaxSize = 24;

// Refresh Rate (in milliseconds)
var snowRefresh = 30;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";


var snow = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

 function initSnow() {
	var snowSize = snowMaxSize - snowMinSize;
	marginBottom = document.body.scrollHeight - 480;
	marginRight = document.body.clientWidth - 15;

	for (i = 0; i <= snowMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("flake" + i);
		snow[i].style.fontFamily = "inherit";
		snow[i].size = randomise(snowSize) + snowMinSize;
		snow[i].style.fontSize = snow[i].size + "px";
		snow[i].style.color = snowColor[randomise(snowColor.length)];
		snow[i].style.zIndex = 1000;
		snow[i].sink = snowSpeed * snow[i].size / 5;
		snow[i].posX = randomise(marginRight - snow[i].size);
		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
		snow[i].style.left = snow[i].posX + "px";
		snow[i].style.top = snow[i].posY + "px";
	}

	moveSnow();
	 
}
function moveSnow() {
	for (i = 0; i <= snowMax; i++) {
		coords[i] += pos[i];
		snow[i].posY += snow[i].sink;
		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		snow[i].style.top = snow[i].posY + "px";

		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
			snow[i].posX = randomise(marginRight - snow[i].size);
			snow[i].posY = 0;
		}
	}

	setTimeout("moveSnow()", snowRefresh);
}

var nav = document.getElementById("nav");

for (i = 0; i <= snowMax; i++) {
	document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}


function resize() {
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;
}

window.addEventListener('load', initSnow);
window.addEventListener('resize', resize);


    var navItemBox = document.getElementById("navItem1st")
    
	
	navItemBox.onmouseover = function waveTextHoverOn() { //When you hover over
    var navItemText = document.getElementsByClassName("navItemLetter")
    for (var navItemText of navItemText) { // Simple loop to iterate through classes
        navItemText.style.animationName = "navJump"
    }    
}    
navItemBox.onmouseout = function waveTextHoverOff() {
    var navItemText = document.getElementsByClassName("navItemLetter")
    for (var navItemText of navItemText) { // Simple loop to iterate through classes
        navItemText.style.animationName = "none"
    }    
}


document.querySelector(".leftRightParaBox").onmouseover = function leftRightHoverOver() { // When uou hover over
var leftPara = document.getElementById("navListLeftPara");
var rightPara = document.getElementById("navListRightPara");
    rightPara.style.transform = "rotateX(0deg) rotateY(45deg)";
    leftPara.style.transform = "rotateX(0deg) rotateY(-20deg)";
    leftPara.style.color = "#ffce6b"; // Yellow highlight color 
    rightPara.style.color = "white";

}

document.querySelector(".leftRightParaBox").onmouseout = function leftRightHoverOut() { // When uou hover out
var leftPara = document.getElementById("navListLeftPara");
var rightPara = document.getElementById("navListRightPara");
    rightPara.style.transform = "rotateX(0deg) rotateY(93deg)";
    leftPara.style.transform = "rotateX(0deg) rotateY(0deg)";
    leftPara.style.color = "white";
    rightPara.style.color = "#6b21ff"; // Ourple colors
}

var backgroundDiv = document.querySelector(".iconHoverBox");

firefoxLogoDiv.onmouseover = function firefoxHoverAni() { // Firefox Hover ON 
    var firefoxLogo = document.getElementById("firefoxIcon")
    firefoxLogoDiv.style.boxShadow = "0 0 15px #ffee10"
} 
firefoxLogoDiv.onmouseout = function firefoxHoverAniOff() { // Firefox hover OFF 
    var firefoxLogoDiv = document.getElementById("firefoxLogoDiv")
    var firefoxLogo = document.getElementById("firefoxIcon")
    firefoxLogoDiv.style.boxShadow = "none"
} 

chromeLogoDiv.onmouseover = function chromeHoverAni() { // cHROME hover ON 
    var chromeLogoDiv = document.getElementById("chromeLogoDiv")
    var chromeLogo = document.getElementById("chromeIcon")
    chromeLogoDiv.style.boxShadow = "0 0 15px #ffee10"
} 

chromeLogoDiv.onmouseout = function chromeHoverAniOff() { // cHROME hover Off
    var chromeLogoDiv = document.getElementById("chromeLogoDiv")
    var chromeLogo = document.getElementById("chromeIcon")
    chromeLogoDiv.style.boxShadow = "none"
} 

backgroundDiv.onmouseover = function chromeHoverAni() { // cHROME hover ON
    backgroundDiv.style.boxShadow = "0 0 15px #ffee10"
} 
backgroundDiv.onmouseout = function chromeHoverAniOff() { // cHROME hover OFF
    backgroundDiv.style.boxShadow = "none"
} 

var main = document.getElementById("main")
// When the user scrolls the page, execute myFunction
main.onscroll = function() {scrollTracker()};


function scrollTracker() {
  var winScroll = main.scrollTop || document.documentElement.scrollTop;
  var height = main.scrollHeight - main.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log("main")
  document.querySelector(".trackerBar").style.width = scrolled + "%";
}

var ball = document.querySelector("#ball");
var ballBox = document.querySelector("#ballBox");
var ballTracker = document.querySelector("#ballTracker")

ballBox.onmousemove = (event) => {
	
var x = (event.clientX - ballBox.offsetLeft) * 100 / ballBox.offsetWidth  + "%";

var y = (event.clientY - ballBox.offsetTop) * 100 / ballBox.offsetHeight + "%";

	console.log(x, y)

	ball.style.top = y;
	ball.style.left = x
	
	ball.style.width = "100px";
	ball.style.height = "100px";
	ball.style.borderRadius = "100%";
	ball.style.transform = "translate(-50%, -50%)"
	ball.style.boxShadow = "0 0 30px 1px #222236ad"
	ball.style.transition = "0.07s ease-out";
	ball.style.transition = " opacity 1s ease-out";
	ball.style.transition = "background-color 0s";
	

	
}
ballBox.onmouseover = (event) => {

	ball.style.transition = " opacity 2s ease-out";
	ball.style.opacity = "1";
	ball.style.backgroundColor = "black"
	ball.style.width = "100px"
	ball.style.height = "100px"

}
ballBox.onmouseout = (event) => {
	var x = (event.clientX - ballBox.offsetLeft) * 100 / ballBox.offsetWidth  + "%";
	var y = (event.clientY - ballBox.offsetTop) * 100 / ballBox.offsetHeight + "%";

	ball.style.transition = "0.7s";
	ball.style.top = y;
	ball.style.left = x;
	ball.style.border = "0"
	ball.style.boxShadow = "0"
	ball.style.opacity = "0"
	
	ball.style.transition = "all 0.3s ease-out";

}







var dragBall = document.querySelector(".dragBall");
var dragBox = document.querySelector(".dragBox");


dragBox.ondrag = (event) => {
	var x = (event.clientX - dragBox.offsetLeft) * 100 / dragBox.offsetWidth  + "%";

	var y = (event.clientY - dragBox.offsetTop) * 100 / dragBox.offsetHeight + "%";
	console.log(x, y);
	dragBall.style.top = y;
	dragBall.style.left = x;
}
dragBox.onmouseover = (event) => {
	dragBall.style.width = "100px"
	dragBall.style.height = "100px"
	dragBall.style.borderRadius = "100%";
	dragBall.style.top = "50%";
	dragBall.style.left = "50%";
	dragBall.style.transform = "translate(-50%, -50%)";

	dragBall.style.boxShadow = "0 0 30px 1px #222236ad";
}
dragBox.onmouseout = (event) => {
	dragBall.style.left = "0";
	dragBall.style.top = "0";
	dragBall.style.width = "100%";
	dragBall.style.height = "100%";
	dragBall.style.borderRadius = "10%";
	dragBall.style.border = "0";
	dragBall.style.boxShadow = "0";
	dragBall.style.top = "0%";
	dragBall.style.left = "0%";
	dragBall.style.transform = "translate( 0%, 0%)";
}




// Minesweep / minröj
let parts = {
	amount_rows: 16,
	amount_cols: 16,
	amount_bombs: 40,
	bomb: "💣",
	alive: true,
	colors : {
		1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'
	}
}

window.addEventListener('load', function() {
    document.getElementById('lost').style.display="none";
    startGame();
});

function cellID(i, j) {
    return 'cell-' + i + '-' + j;
}

function createTable() {
    var table, row, td, i, j;
    table = document.createElement('table');
    
    for (i=0; i<components.num_of_rows; i++) {
        row = document.createElement('tr');
        for (j=0; j<components.num_of_cols; j++) {
            td = document.createElement('td');
            td.id = cellID(i, j);
            row.appendChild(td);
            addCellListeners(td, i, j);
        }
        table.appendChild(row);
    }
    return table;
}

function placeBombs() {
    var i, rows = [];
    
    for (i=0; i<components.amount_bombs; i++) {
        placeOneBomb(rows);
    }
    return rows;
} 

function placeOneBomb(bombs) {

    var nrow, ncol, row, col;
    nrow = Math.floor(Math.random() * components.num_of_rows);
    ncol = Math.floor(Math.random() * components.num_of_cols);
    row = bombs[nrow];
    
    if (!row) {
        row = [];
        bombs[nrow] = row;
    }
    
    col = row[ncol];
    
    if (!col) {
        row[ncol] = true;
        return
    } 
    else {
        placeOneBomb(bombs);
    }
}

function adjacentBombs(row, col) {
    var i, j, num_of_bombs;
    num_of_bombs = 0;

    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            if (components.bombs[row + i] && components.bombs[row + i][col + j]) {
                num_of_bombs++;
            }
        }
    }
    return num_of_bombs;
}

function adjacentFlags(row, col) {
    var i, j, num_flags;
    num_flags = 0;

    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            cell = document.getElementById(cellID(row + i, col + j));
            if (!!cell && cell.flagged) {
                num_flags++;
            }
        }
	}
}


function handleCellClick(cell, i, j) {
    if (!components.alive) {
        return;
    }

    if (cell.flagged) {
        return;
    }

    cell.clicked = true;

    if (components.bombs[i][j]) {
        cell.style.color = 'red';
        cell.textContent = components.bomb;
        gameOver();
        
    }
    else {
        cell.style.backgroundColor = 'lightGrey';
        num_of_bombs = adjacentBombs(i, j);
        if (num_of_bombs) {
            cell.style.color = components.colors[num_of_bombs];
            cell.textContent = num_of_bombs;
        } 
        else {
            clickAdjacentBombs(i, j);
        }
    }
}

function clickAdjacentBombs(row, col) {
    var i, j, cell;
    
    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            cell = document.getElementById(cellID(row + i, col + j));
            if (!!cell && !cell.clicked && !cell.flagged) {
                handleCellClick(cell, row + i, col + j);
            }
        }
    }
}

function performMassClick(cell, row, col) {
    if (adjacentFlags(row, col) === adjacentBombs(row, col)) {
        clickAdjacentBombs(row, col);
    }
}


function gameOver() {
    components.alive = false;
    document.getElementById('lost').style.display="block";
    
}

function reload(){
    window.location.reload();
}
