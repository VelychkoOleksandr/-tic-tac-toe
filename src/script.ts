let winner: string;
let turnsCounter: number = 0;
let currentPlayer = 'cross';
const allCells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');

let winCondition = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonals
    [0, 4, 8],
    [2, 4, 6]
]



//////////////////////
let crossArray: number[] = [];
let nougntArray: number[] = [];

function adIdToCells() {
    let a: number = 0;
    for (const key in allCells) {
        allCells[key].setAttribute('id', "div" + a);
        a++;
    }
}

//adIdToCells(); WHY THIS PIECE OF SHIT BROKE MY PROGRAMM!!!!!!!!!!!!!!!

//////////////////////

function addKeyAttribute(target: any, key: any) {
    if (typeof target === 'number') {
        return;
    }
	target.setAttribute('data-key', key);
}

//EVENT LISTENRS TO PLAY FIELD//
function addClickListener(allCells: HTMLCollectionOf<Element>) {
    for (let key in allCells) {
            addKeyAttribute(allCells[key], key);
            if (typeof allCells[key] === 'number') {
                break;
            }
            allCells[key].addEventListener('mousedown', addListenersToCells);
    }

}

function addListenersToCells(event: any) {
	let key: any = event.target.getAttribute('data-key'); 
    if (event.button === 0 && !(allCells[key].classList.contains('cell-cross' || 'cell-nought')) && currentPlayer === 'cross') {
        allCells[key].classList.add('cell-cross');
        crossArray.push(parseInt(allCells[key].getAttribute('id').replace(/d/, '')));
        changeTurn(currentPlayer);
        checkWinner();
    } if (event.button === 2 && !(allCells[key].classList.contains('cell-cross' || 'cell-nought') ) && currentPlayer === 'nought') {
        allCells[key].classList. add('cell-nought');
        nougntArray.push(parseInt(allCells[key].getAttribute('id').replace(/d/, '')));
        changeTurn(currentPlayer);
        checkWinner();
    }

}

//LISTENERS CLEANER//
function stopAllListeners() {
    for (const key in allCells) {
			allCells[key].removeEventListener('mousedown', addListenersToCells);
    }
}

//CHANGE TURN FUNCTION + CURRENT_TURN COUNTER//
function changeTurn(currentPlayerTurn: string) {
    if(currentPlayerTurn === 'cross') {
        currentPlayer = 'nought';
        turnsCounter++;
        return;
    } else if (currentPlayerTurn === 'nought') {
        currentPlayer = 'cross';
        turnsCounter++;
        return;
    }
    
}

//ADD OTHER LISTENERS//
function addOtherListeners(): void {
    //RESET BUTTON//
    document.getElementById('btn-reset').onclick = function(){
    location.reload();
    };

    //DELETE RIGHT CLICK EVENT ON PAGE//
    document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    }, false);
}


//CHECK WIN CONDITION FUNCTION//
function checkCrossWinner(): boolean {
    let allCurrentCells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
    if(allCurrentCells[0].classList.contains('cell-cross') && allCurrentCells[1].classList.contains('cell-cross') && allCurrentCells[2].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[3].classList.contains('cell-cross') && allCurrentCells[4].classList.contains('cell-cross') && allCurrentCells[5].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[6].classList.contains('cell-cross') && allCurrentCells[7].classList.contains('cell-cross') && allCurrentCells[8].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[0].classList.contains('cell-cross') && allCurrentCells[3].classList.contains('cell-cross') && allCurrentCells[6].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[1].classList.contains('cell-cross') && allCurrentCells[4].classList.contains('cell-cross') && allCurrentCells[7].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[2].classList.contains('cell-cross') && allCurrentCells[5].classList.contains('cell-cross') && allCurrentCells[8].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[0].classList.contains('cell-cross') && allCurrentCells[4].classList.contains('cell-cross') && allCurrentCells[8].classList.contains('cell-cross')) {
        return true;
    } if (allCurrentCells[2].classList.contains('cell-cross') && allCurrentCells[4].classList.contains('cell-cross') && allCurrentCells[6].classList.contains('cell-cross')) {
        return true;
    }
    return false;
}

function checkNoughtWinner(): boolean {
    let allCurrentCells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
    if(allCurrentCells[0].classList.contains('cell-nought') && 
        allCurrentCells[1].classList.contains('cell-nought') && 
        allCurrentCells[2].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[3].classList.contains('cell-nought') &&
          allCurrentCells[4].classList.contains('cell-nought') &&
          allCurrentCells[5].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[6].classList.contains('cell-nought') && 
          allCurrentCells[7].classList.contains('cell-nought') && 
          allCurrentCells[8].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[0].classList.contains('cell-nought') && 
          allCurrentCells[3].classList.contains('cell-nought') && 
          allCurrentCells[6].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[1].classList.contains('cell-nought') && 
          allCurrentCells[4].classList.contains('cell-nought') &&
          allCurrentCells[7].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[2].classList.contains('cell-nought') && 
          allCurrentCells[5].classList.contains('cell-nought') &&
          allCurrentCells[8].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[0].classList.contains('cell-nought') &&
          allCurrentCells[4].classList.contains('cell-nought') && 
          allCurrentCells[8].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[2].classList.contains('cell-nought') &&
          allCurrentCells[4].classList.contains('cell-nought') &&
          allCurrentCells[6].classList.contains('cell-nought')) {
        return true;
    }
    return false;
}

function draw(): boolean {
    if(turnsCounter === 9 && 
        checkCrossWinner() === false && 
        checkNoughtWinner() === false) {
        stopAllListeners();
        alert('Nobody Won');
        winner = 'Draw';
        return true;
    }
    return false;
}

//CHECK WINNER//
function checkWinner() {
    if (draw() ||  checkCrossWinner() || checkNoughtWinner()) {
        alert('We Have Result!');
        stopAllListeners();	

    }
}



addOtherListeners();
addClickListener(allCells);








