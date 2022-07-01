let example = [1,1,2]

function lonelyinteger(a) {
    let lonely = a.filter(value => {
        return a.indexOf(value) === a.lastIndexOf(value)
    })
    return lonely[0]
}


console.log(lonelyinteger(example))