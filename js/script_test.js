var winCondition = [
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
    [2, 4, 6],
];

winCondition.map(function(item, index) {
    let result = _.isEqual(_.intersection(item, [0, 1, 2, 3, 4, 8]), item); 
    console.log( index + ": " +result);
});

