(function() {

    arr = [1, 2, 3, 4, 5];
    console.log(arr);
    numberSwapperBitManip(arr, 1, 2);
    console.log(arr);

})();
function numberSwapper(arr, i, j) {
    arr[i] = arr[i] - arr[j];
    arr[j] = arr[i] + arr[j];
    arr[i] = arr[j] - arr[i];
}

function numberSwapperBitManip(arr, i, j) {
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}
