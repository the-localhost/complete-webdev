/**
 * Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
 * make a function that organizes these into individual array that is ordered. 
 * For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
*/

function freqArr(elem, freq) {       // returns an array of length freq with all elements as elem
    const res = [];
    for(let i=0; i<freq; i++) {
        res.push(elem);
    }
    return res;
}

function cleanIt(arr) {
    const unique = {};
    const finals = [];
    arr.forEach(i => {
        unique[i] = unique[i]?unique[i]+1:1;
    });
    const keys = Object.keys(unique)
                    .map(i=>Number(i))
                    .sort((a,b)=>a-b);
    keys.forEach(i => {
        let freq = unique[i];
        finals.push(freqArr(i, freq));
    });
    return finals;
}

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const cleanArr = cleanIt(arr);
console.log(JSON.stringify(cleanArr));

// Time Complexity: O(2n) = O(n)
// Space complexity: O(N), N = number of unique elements

/** Method2: We sort the array first, and then traverse it and make groups.
 *  Time Complexity: O(nlogn) + O(n) = O(nlogn)
 *  Space Complexity: O(n)
 *          constant extra space if we can modify the original array
 *          O(n) extra space otherwise
*/