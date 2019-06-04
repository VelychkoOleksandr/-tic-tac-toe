let winner: string ;
const allCells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
let currentPlayer = 'cross';

//EVENT LISTENRS TO PLAY FIELD//
function addClickListener(allCells: HTMLCollectionOf<Element>) {
    for (const key in allCells) {
        allCells[key].addEventListener('mousedown', function(event: MouseEvent) {
            if (event.button === 0 && !(allCells[key].classList.contains('cell-cross' || 'cell-nought')) && currentPlayer === 'cross') {
                allCells[key].classList.add('cell-cross');
                currentPlayer = 'nought';
                if (checkCrossWinner()) {
                    console.log('Cross is Winner!');
                } else if (checkNoughtWinner()) {
                    console.log('Nought is Winner!');
                }
            } if (event.button === 2 && !(allCells[key].classList.contains('cell-cross' || 'cell-nought') ) && currentPlayer === 'nought') {
                event.preventDefault();
                allCells[key].classList. add('cell-nought');
                currentPlayer = 'cross';
                if (checkCrossWinner()) {
                    console.log('Cross is Winner!');
                } else if (checkNoughtWinner()) {
                    console.log('Nought is Winner!');
                }
            }

        })
    }

}

function stopAllListeners() {
    for (const key in allCells) {

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



