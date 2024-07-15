export const addString = (inputString) => {
    let sum = 0;

    inputString.split(",").map(number => {
        sum+=parseInt(number)        
    })
    return sum;
}