(function() {

    console.log(ticTac([[1, 0, 1], [0, 1, 1], [0, 1, 0]]));

})();


// Xs are 1s and Os are 0s and embty spaces are 2s
function ticTac(arr) {

    //horizontal and vertical checks
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) return arr[i][0];
        if (arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) return arr[0][i];
    }

    //diagonal checks
    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) return arr[0][0];
    if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) return arr[0][2];

    return false;

}