(function() {

    console.log(factorialZeros(5));
    console.log(factorialZeros(9));
    console.log(factorialZeros(14));
    console.log(factorialZeros(19));
    console.log(factorialZeros(26));

})()

function factorialZeros(n) {

    let num = 5, count = 0;
    while (num <= n) {
        count += Math.floor(n / num);
        num *= 5;
    }
    return count;

}