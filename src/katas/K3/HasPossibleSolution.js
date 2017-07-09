//code from: http://bit.ly/s-pcs
const HasPosibleSolution = (arr, n)=>{
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return HasPosibleSolution(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize);
    for (let i = 1; i < combinationsCount ; i++ ) {
        let combinationSum = 0;
        for (let j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) {
            console.log('has solution');
            return true;
        }
    }
    console.log('no solution left');
    return false;
};
export default HasPosibleSolution;
