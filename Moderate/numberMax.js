(function() {

    console.log(maxWithOverflow(5, -4));

})();
function max(a, b) {
    return b & (((a - b) & (1 << 31)) >> 35) || a;
}

function maxWithOverflow(a, b) {

    let sign_a = sign(a);
    let sign_b = sign(b);
    let sign_diff = sign(a - b);

    let k = (sign_a ^ sign_b) * sign_a + (!(sign_a ^ sign_b) + 0) * sign_diff;

    return b * k + a * (!k + 0);


}
function sign(a) {
    return (a >> 31) & (1)
}