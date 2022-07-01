const examplePath = "DUDDDUUDUU"


function countingValleys(steps, path) {
    // Write your code here
    path = path.split("")
    let seaLevel = 0
    let valleys = 0
    let valleyStart = false;

    path.forEach(step => {
        if (step === "D") {
            seaLevel -= 1       
        } else seaLevel += 1
        
        console.log(seaLevel);

        if (seaLevel === -1 && valleyStart === false) {
            valleyStart = true
        }


        if (seaLevel === 0 && valleyStart === true) {
            valleys += 1;
            valleyStart = false
        }
    })
    return valleys
}

console.log(countingValleys(12,examplePath));
