export const addString = (inputString) => {
    let sum = 0;
    let processedString;
    let delimiters = [','];
    if(inputString.startsWith('//')){
        delimiters = inputString.substring(2, inputString.indexOf('\n')).split("");
        inputString = inputString.substring(inputString.indexOf('\n')+1, inputString.length);
    }
    processedString = inputString.replace(/(\r?\n|\n)/g, delimiters[0])
    processedString.split(delimiters[0]).map(number => {
        sum+=parseInt(number || 0)        
    })
    return sum;
}