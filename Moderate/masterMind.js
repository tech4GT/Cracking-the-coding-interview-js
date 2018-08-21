

(function() {
    getHits("GGRR", "RGBY");
})();



function getHits(guess, solution) {
    var map = {}, hits = 0, psuedoHits = 0, helper = {};

    for (let i = 0; i < 4; i++) {
        map[solution.charAt(i)] = i;
    }

    for (let i = 0; i < 4; i++) {
        if (guess.charAt(i) == solution.charAt(i)) {
            hits++;
            if (helper[guess.charAt(i)] == false) psuedoHits--;
            helper[guess.charAt(i)] = true;
        } else if (map[guess.charAt(i)] !== undefined && helper[guess.charAt(i)] === undefined) {
            helper[guess.charAt(i)] = false;
            psuedoHits++;
        }
    }

    console.log(hits + " " + psuedoHits);

}