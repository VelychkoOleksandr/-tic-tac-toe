let winner: string ;
const allCells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
let currentPlayer = 'cross';

function addKeyAttribute(target: any, key: any) {
	target.setAttribute('data-key', key);
}

//EVENT LISTENRS TO PLAY FIELD//
function addClickListener(allCells: HTMLCollectionOf<Element>) {
    for (let key in allCells) {
		    addKeyAttribute(allCells[key], key);
            allCells[key].addEventListener('mousedown', addListenersToCells);
    }

}

function addListenersToCells(event: any) {
	let key: any = event.target.getAttribute('data-key'); 
    if (event.button === 0 && !(allCells[key].classList.contains('cell-cross' || 'cell-nought')) && currentPlayer === 'cross') {
        allCells[key].classList.add('cell-cross');
        currentPlayer = 'nought';
        if (checkCrossWinner()) {
            setTimeout(() => {
                alert('Cross is Winner!');
            }, 100);
            stopAllListeners();
        } else if (checkNoughtWinner()) {			
            setTimeout(() => {
                alert('Nought is Winner!');
            }, 100);
            stopAllListeners();	
        }
    } if (event.button === 2 && !(allCells[key].classList.contains('cell-cross' || 'cell-nought') ) && currentPlayer === 'nought') {
        event.preventDefault();
        allCells[key].classList. add('cell-nought');
        currentPlayer = 'cross';
        if (checkCrossWinner()) {
            setTimeout(() => {
                alert('Cross is Winner!');
            }, 100);
            stopAllListeners();	
        } else if (checkNoughtWinner()) {
            setTimeout(() => {
                alert('Nought is Winner!');
            }, 100);
            stopAllListeners();	
        }
    }

}

//LISTENERS CLEANER//
function stopAllListeners() {
    for (const key in allCells) {
			allCells[key].removeEventListener('mousedown', addListenersToCells);
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
    if(allCurrentCells[0].classList.contains('cell-nought') && allCurrentCells[1].classList.contains('cell-nought') && allCurrentCells[2].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[3].classList.contains('cell-nought') && allCurrentCells[4].classList.contains('cell-nought') && allCurrentCells[5].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[6].classList.contains('cell-nought') && allCurrentCells[7].classList.contains('cell-nought') && allCurrentCells[8].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[0].classList.contains('cell-nought') && allCurrentCells[3].classList.contains('cell-nought') && allCurrentCells[6].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[1].classList.contains('cell-nought') && allCurrentCells[4].classList.contains('cell-nought') && allCurrentCells[7].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[2].classList.contains('cell-nought') && allCurrentCells[5].classList.contains('cell-nought') && allCurrentCells[8].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[0].classList.contains('cell-nought') && allCurrentCells[4].classList.contains('cell-nought') && allCurrentCells[8].classList.contains('cell-nought')) {
        return true;
    } if (allCurrentCells[2].classList.contains('cell-nought') && allCurrentCells[4].classList.contains('cell-nought') && allCurrentCells[6].classList.contains('cell-nought')) {
        return true;
    }
    return false;
}



addOtherListeners();
addClickListener(allCells);




