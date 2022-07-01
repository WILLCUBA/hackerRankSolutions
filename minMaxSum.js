const arr1 = [5,5,5,5,5];

function miniMaxSum(arr) {
    arr.sort()
    let maxSum = 0
    let minSum = 0
    if (arr[0] === arr[arr.length - 1]) {
        maxSum = arr[0]*4
        minSum = maxSum
    } else {
        arr.forEach(element => {
       
            if (arr.indexOf(element) != 0) {
                maxSum += element
            } 
            if (arr.indexOf(element) != arr.length - 1) {
                minSum += element
            }
    }) 
    }
    console.log(minSum, maxSum);
}
miniMaxSum(arr1);