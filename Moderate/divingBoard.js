

(function() {
    // let arr = {};
    // getLengths(1, 3, 2, 0, {}, arr)
    let arr = getLengthsIterative(1, 3, 2);
    for (let i in arr)
        console.log(i);
})();

function getLengths(shorter, longer, k, total, obj, arr) {

    if (k == 0) return arr[total] = true;

    if (obj[total + "-" + k]) return;

    getLengths(shorter, longer, k - 1, total + shorter, obj, arr);
    getLengths(shorter, longer, k - 1, total + longer, obj, arr);
    obj[total + "-" + k] = true;

}

function getLengthsIterative(shorter, longer, k) {


    let arr = {};
    for (let i = 0; i <= k; i++)
        arr[shorter * i + longer * (k - i)] = true;
    return arr;
}