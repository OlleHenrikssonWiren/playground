

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


function startGame() {
    parts.bombs = placeBombs();
    document.getElementById('field').appendChild(createTable());
}

function cellID(i, j) {
    return 'cell-' + i + '-' + j;
}

function createTable() {
    var table, row, td, i, j;
    table = document.createElement('table');
    
    for (i=0; i < parts.amount_rows; i++) {
        row = document.createElement('tr');
        for (j=0; j < parts.amount_cols; j++) {
            td = document.createElement('td');
            td.id = cellID(i, j);
            row.appendChild(td);
            
        }
        table.appendChild(row);
    }
    return table;
}

function placeBombs() {
    var i, rows = [];
    
    for (i=0; i<parts.amount_bombs; i++) {
        placeOneBomb(rows);
    }
    return rows;
} 

function placeOneBomb(bombs) {

    var nrow, ncol, row, col;
    nrow = Math.floor(Math.random() * parts.amount_rows);
    ncol = Math.floor(Math.random() * parts.amount_cols);
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
    var i, j, amount_bombs;
    amount_bombs = 0;

    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            if (parts.bombs[row + i] && parts.bombs[row + i][col + j]) {
                amounts_bombs++;
            }
        }
    }
    return amount_bombs;
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
    if (!parts.alive) {
        return;
    }

    if (cell.flagged) {
        return;
    }

    cell.clicked = true;

    if (parts.bombs[i][j]) {
        cell.style.color = 'red';
        cell.textContent = parts.bomb;
        gameOver();
        
    }
    else {
        cell.style.backgroundColor = 'lightGrey';
        amount_bombs = adjacentBombs(i, j);
        if (amount_bombs) {
            cell.style.color = parts.colors[amount_bombs];
            cell.textContent = amount_bombs;
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

window.addEventListener('load', function() {
    document.getElementById('lost').style.display="none";
    startGame();
});
