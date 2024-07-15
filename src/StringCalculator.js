export const addString = (inputString) => {
    let sum = 0;
    const processedString = inputString.replace(/(\r?\n|\n)/g, ",")
    processedString.split(",").map(number => {
        sum+=parseInt(number || 0)        
    })
    return sum;
}