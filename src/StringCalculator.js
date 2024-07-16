export const addString = (inputString) => {
    let sum = 0;
    let processedString;
    let delimiters = [','];
    let invalid = [];
    if(inputString.startsWith('//')){
        delimiters = inputString.substring(2, inputString.indexOf('\n')).split("");
        inputString = inputString.substring(inputString.indexOf('\n')+1, inputString.length);
    }
    processedString = inputString.replace(/(\r?\n|\n)/g, delimiters[0])
    processedString.split(delimiters[0]).map(number => {
        number = parseInt(number || 0);
        if (number < 0){
            invalid.push(number);
        } else {
            sum+=number;
        }
    })
    if(invalid.length > 0){
        throw new Error(`negative numbers not allowed ${invalid.toString()}`)
    } else {
        return sum;
    }
}