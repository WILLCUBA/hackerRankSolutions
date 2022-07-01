const arrayEx= [1,1,3,1,2,1,3,3,3,3]

function sockMerchant(n, ar) {
    // Write your code here
    let numberOfPairs = 0

    let sockTypeCount = new Map();
    
    for (let i = 0; i < n; i++) {
        const sock = ar[i];
        if(!sockTypeCount.has(sock)) {
            sockTypeCount.set(sock, 1)
        } else {
            const newCount = sockTypeCount.get(sock) + 1;
            sockTypeCount.set(sock, newCount);
        }
    }

    sockTypeCount.forEach((values) => {
        
        numberOfPairs += Math.floor(values/2)
    })
    

    return numberOfPairs
}

console.log(sockMerchant(10, arrayEx));