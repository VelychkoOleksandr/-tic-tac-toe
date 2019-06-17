let winner: string;
let turnsCounter: number = 0;
let currentPlayer = 'cross';
const allCells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');

let crossArray: number[] = [];
let nougntArray: number[] = [];
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
];

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
function checkCrossWinCondition(): boolean {
    let checkResult: boolean;
    winCondition.map((item, index) => {
        let result = _.isEqual(_.intersection(item, crossArray), item); 
        if (result) {
            winner = 'Cross';
            checkResult =  true;
        }
    }); 
    if (checkResult) {
        return true;
    }
    return false;
}

function checkNoughtWinCondition(): boolean {
    let checkResult: boolean;
    winCondition.map((item, index) => {
        let result = _.isEqual(_.intersection(item, nougntArray), item); 
        if (result) {
            winner = 'Nought';
            checkResult =  true;
        }
    }); 
    if (checkResult) {
        return true;
    }
    return false;
}

function drawCondition(): boolean {
    if(turnsCounter === 9 && 
        checkCrossWinCondition() === false && 
        checkNoughtWinCondition() === false) {
        winner = 'Draw';
        return true;
    }
    return false;
}

//CHECK WINNER//
function checkWinner() {
    if (drawCondition() ||  checkCrossWinCondition() || checkNoughtWinCondition()) {
        setTimeout(() => {
            alert(`We have result! ${winner}`); 
        }, 50);
        stopAllListeners();	
    }
}



addOtherListeners();
addClickListener(allCells);








