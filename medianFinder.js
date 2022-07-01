const example = [5,3,1,2,4]

function findMedian(arr) {
    (arr = []) => {
        let sum = arr.reduce((acc, num) => acc + num, 0)
        let currentSum = 0
        for (let i = 0; i < arr.length; i++) {
           currentSum += (arr[i - 1] || 0)
           sum -= arr[i]
           if (currentSum === sum) {
              return i
           }
        }
        return -1
     }
    }



