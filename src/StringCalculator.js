export const addString = (inputString) => {
    let sum = 0;
    let processedString;
    let delimiters = [','];
    let invalid = [];

    // Check for custom delimiters
    if(inputString.startsWith('//')){
        delimiters = inputString.substring(2, inputString.indexOf('\n')).match(/(?<=\[)(.*?)(?=\])/g)
        inputString = inputString.substring(inputString.indexOf('\n')+1, inputString.length);
    }

    const matcher = new RegExp(`/\r?\n|\n|[${delimiters}]`, "g");
    processedString = inputString.replace(matcher, delimiters[0])
    
    processedString.split(delimiters[0]).map(number => {
        number = parseInt(number || 0);
        if (number < 0){
            invalid.push(number);
        } else {
            if (number<1000) {
                sum+=number;
            }
        }
    })
    
    if(invalid.length > 0){
        throw new Error(`negative numbers not allowed ${invalid.toString()}`)
    } else {
        return sum;
    }
}