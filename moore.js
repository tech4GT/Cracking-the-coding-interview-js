(function() {

    console.log(mooreVoting([4, 7, 4, 4, 7, 4, 4, 9, 4, 3]))


})()

function mooreVoting(arr) {


    let val = getCandidate(arr);
    return checkCandidate(val) ? val : null;

    function getCandidate() {
        let i = 0, count = 0, el;
        while (i < arr.length) {
            if (count == 0) {
                el = arr[i];
                count++;
            } else if (arr[i] == el) {
                count++;
            } else {
                count--;
            }
            i++;
        }
        return count > 0 ? el : null;
    }
    function checkCandidate(val) {
        if (!val) return false;

        let i = 0, count = 0;
        while (i < arr.length) {
            if (arr[i] == val) count++;
            if (count > arr.length / 2) return true;
            i++;
        }
        return false;
    }
}