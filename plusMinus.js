const arr1 = [-4, 3, -9, 0, 4, 1]



function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let ceros = 0;

    arr.map(number => {
        if (Math.sign(number) === 0) {
           ceros += 1
        } else if (Math.sign(number) === 1) {
            positive += 1
        } else {
            negative += 1
        }
    })
    
    const denominator = arr.length

    console.log(positive/denominator)
    console.log(negative/denominator);
    console.log(ceros/denominator);
}

plusMinus(arr1)