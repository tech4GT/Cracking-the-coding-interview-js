(function() {

    console.log(minDiff([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));

})();

function minDiff(a, b) {
    a = a.sort((i, j) => i - j);
    b = b.sort((i, j) => i - j);

    let min = 1000, diff;
    for (let i = 0, j = 0; i < a.length && j < b.length;) {
        if (a[i] > b[j]) {
            diff = a[i] - b[j];
            j++;
        } else if (a[i] < b[j]) {
            diff = b[j] - a[i];
            i++;
        } else return 0;

        if (diff < min) min = diff;
    }
    return min;
}