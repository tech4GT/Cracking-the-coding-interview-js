

(function() {

    arr = [1, 2, 3, 4, 5];
    console.log(arr);
    numberSwapperBitManip(arr, 1, 2);
    console.log(arr);

    let book = "this is a book with many many words", queries = ["this", "many", "something"];
    console.log(lookInBook(book, queries));

    let point1 = {
        x: 0,
        y: 2
    },
        point2 = {
            x: 2,
            y: 0
        },
        point3 = {
            x: -2,
            y: 0
        };
    pointOfIntersection(point1, point2, point3, point1);
    console.log(ticTac([[1, 0, 1], [0, 1, 1], [0, 1, 0]]));


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

function lookInBook(book, queries) {
    let rv = [], obj = {}, words = book.split(" ");

    if (!book) throw Exception("Please provide a book")

    //pre-processing
    for (let word of words) {
        if (obj.hasOwnProperty(word)) obj[word]++;
        else obj[word] = 1;
    }

    //conditions
    if (!queries) return rv;

    //query processing
    for (let query of queries) {
        if (obj.hasOwnProperty(query)) rv.push(obj[query]);
        else rv.push(0);
    }
    return rv;
}

function pointOfIntersection(start1, end1, start2, end2) {
    var line1 = getLine(start1, end1), line2 = getLine(start2, end2);

    if (line1.m == line2.m) {
        console.log("Lines are parallel");
        return;
    }

    let intPoint = {
        x: (line2.c - line1.c) / (line1.m - line2.m),
        y: line1.m * ((line2.c - line1.c) / (line1.m - line2.m)) + line1.c
    }

    let segment1 = {
        point1: start1,
        point2: end1,
        m: line1.m,
        c: line1.c
    }
    let segment2 = {
        point1: start2,
        point2: end2,
        m: line2.m,
        c: line2.c
    }
    if (pointOnSegment(intPoint, segment1) && pointOnSegment(intPoint, segment2))
        console.log(intPoint);
    else console.log("No intersection");


    function getLine(point1, point2) {
        let m = (point2.y - point1.y) / (point2.x - point1.x);
        let c = point1.y - m * point1.x;
        return {
            m: m,
            c: c
        }
    }

    function pointOnSegment(point, segment) {
        if (point.x <= Math.max(segment.point1.x, segment.point2.x) && point.x >= Math.min(segment.point1.x, segment.point2.x)
            && point.y <= Math.max(segment.point1.y, segment.point2.y) && point.x >= Math.min(segment.point1.y, segment.point2.y)
            && point.y == (segment.m * point.x + segment.c)
        ) return true;
        return false;
    }
}

// Xs are 1s and Os are 0s
function ticTac(arr) {

    //horizontal and vertical checks
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) return arr[i][0];
        if (arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) return arr[0][i];
    }

    //diagonal checks
    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) return arr[0][0];
    if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) return arr[0][2];

    return false;


}



