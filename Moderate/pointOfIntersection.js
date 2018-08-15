(function() {

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

})();

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