
(function() {

    console.log(sort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))

})();


function Pair(min, max) {
    this.m = min;
    this.n = max;
}

function sort(arr) {
    let min = arr.length - 1, max = 0, maxValue = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxValue) maxValue = arr[i];
        else {
            max = i;

            min = min > i ? i : min;
            while (min >= 0 && arr[min] >= arr[i]) min--;
            min++;

        }
    }

    return new Pair(min, max);
}