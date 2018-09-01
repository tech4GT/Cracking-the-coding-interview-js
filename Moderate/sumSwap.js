(function(){


    console.log(getPair([4,1,2,1,1,2],[3,6,3,3]));
    console.log(getPairOptimized([4,1,2,1,1,2],[3,6,3,3]));

})();


function getPair(a,b){
    // first approach O(AlogA + BlogB) + O(1)

    
    var comp = (o,r)=>o-r;
    

    a.sort(comp);
    b.sort(comp);

    var diff = findDiff(a,b);
   
    if(diff%2 != 0) return null;

    diff/=2;

    var i=0,j=0;
    while(i<a.length && j<b.length){
        if(Math.abs(a[i] - b[j]) == diff) return [a[i],b[j]];
        else if(a[i] > b[j]){
            if(a[i] - b[j] > diff) j++;
            else i++;
        } else {
            if(b[j] - a[i] > diff) i++;
            else j++;
        } 
    }

    return null;
}

function findDiff(a,b){
    var sum = (el,sum)=>el+sum;

    var aSum = a.reduce(sum);
    var bSum = b.reduce(sum);

    return Math.abs(aSum-bSum);
}

function getPairOptimized(a,b){
    // O(A+B) + O(A)
    var hashMap = {},diff = findDiff(a,b);
    if(diff%2 != 0) return null;

    diff/=2;

    for(let el of b){
        hashMap[el] = el;
    }

    for(let el of a){
        if(hashMap.hasOwnProperty(el-diff)) return [el,hashMap[el-diff]];
        if(hashMap.hasOwnProperty(el+diff)) return [el,hashMap[el+diff]];
    }

    return null;
}

