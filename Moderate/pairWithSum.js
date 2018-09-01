(function(){


    console.log(findPairsNoSpace([1,1,2,3,4,4,5],5));

})();

function findPairsSpaceExtra(arr,k){


    // O(N) + O(N)
    var hashMap = {},rv = [];
    for(el of arr) hashMap[el] = (hashMap[el] || 0) + 1;

    for(el of arr)
        if(hashMap.hasOwnProperty(k-el)){
            for(let i=0;i<hashMap[k-el];i++) rv.push([el,k-el])
            hashMap[el]--;
        }
    return rv;

}

function findPairsNoSpace(arr,k){

    // O(NlogN) + O(1)

    var left=0,right=arr.length-1,rv=[];

    arr.sort((a,b)=>a-b);
    while(left<right){
        console.log(left + " " + right)
        if(arr[left] + arr[right] == k){
            rv.push([arr[left],arr[right]]);
            if(arr[left+1]-arr[left] < arr[right]-arr[right-1]) left++;
            else right--;
        }
        else if(arr[left] + arr[right] < k){
            left++;
        } else {
            right--;
        }
    }
    return rv;
}