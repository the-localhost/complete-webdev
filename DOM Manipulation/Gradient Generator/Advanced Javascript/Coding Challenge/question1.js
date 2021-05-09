/**
 * Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
 * make a function that organizes these into individual array that is ordered. 
 * For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
*/

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

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

const cleanArr = cleanIt(arr);
console.log(JSON.stringify(cleanArr));