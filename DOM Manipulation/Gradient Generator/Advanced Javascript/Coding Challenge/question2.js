/**
 * Write a javascript function that takes an array of numbers and a target number. 
 * The function should find two different numbers in the array that, when added together, 
 * give the target number. For example: answer([1,2,3], 4)should return [1,3]
*/
function findTwoNumbersSum(arr, sum){
    arr.sort((a,b) => a-b);
    for(let i=0; i<arr.length-1; i++){
        let elem = arr[i];
        if(elem>=sum){
            return "Numbers don't exist";
        }
        let leftSum = sum-elem;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]>leftSum) break;
            if(arr[j]==leftSum){
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(findTwoNumbersSum([1,2,3], 4))

// Time Complexity: O(n2)
// Auxiliary Space: O(1)


/** Method 2
 *  We can use binary search to look for leftSum element for each elem. 
 *  Time Complexity: O(n)*O(logn) = O(nlogn)
 *  Space Complexity: O(1)
*/