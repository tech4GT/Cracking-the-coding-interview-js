//  TODO -- Bit Manipulation

(function() {

    console.log(sub(5, 3));
    console.log(mul(2, 3));

})()


function sub(a, b) {
    let b_negative = neg(b);

    return a + b_negative;

    function neg(val) {

        let inc = val > 0 ? -1 : 1;
        let rv = 0;
        while (val != 0) {
            rv += inc;
            val += inc;

        }
        return rv;
    }
}

function mul(a, b) {
    let smaller = a < b ? a : b, larger = smaller == a ? b : a;

    for (let i = 1; i < smaller; i++)
        larger += larger;

    return larger;
}

function div(a, b) {

}