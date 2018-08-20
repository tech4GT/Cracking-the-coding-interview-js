
(function() {
    console.log(maxCountYear([], []));
})()

function maxCountYear(births, deaths) {

    let birthMap = {}, deathMap = {};
    for (let i of births) {
        birthMap[i] = birthMap[i] + 1 || 1;
    }
    for (let i of deaths) {
        deathMap[i] = deathMap[i] + 1 || 1;
    }


    let maxYear = 0, count = birthMap[1900] || 0, maxCount = count;
    for (let i = 1901; i <= 2000; i++) {
        let birthCount = birthMap[i] || 0;
        let deathCount = deathMap[i - 1] || 0;
        count += birthCount;
        count -= deathCount;
        if (count > maxCount) {
            maxCount = count;
            maxYear = i;
        }
    }

    return maxYear;

}