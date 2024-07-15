export const addString = (inputString) => {
    let sum = 0;

    inputString.split(",").map(number => {
        sum+=parseInt(number || 0)        
    })
    return sum;
}