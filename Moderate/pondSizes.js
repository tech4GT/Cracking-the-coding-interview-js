(function() {

    let arr = [[1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]];
    console.log(getSizes(arr));

})();

function getSizes(arr) {

    var rv = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == 1) rv.push(findland(arr, i, j));
        }
    }
    return rv;
}

function findland(arr, i, j) {
    if (i < 0 || j < 0 || i > arr.length - 1 || j > arr[0].length - 1) return 0;

    if (arr[i][j] == 0) return 0;

    arr[i][j] = 0;
    return 1 + findland(arr, i + 1, j) + findland(arr, i, j + 1) + findland(arr, i - 1, j) + findland(arr, i, j - 1) + findland(arr, i + 1, j + 1) + findland(arr, i - 1, j + 1) + findland(arr, i + 1, j - 1) + findland(arr, i - 1, j - 1);



}