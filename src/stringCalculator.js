module.exports = class stringCalculator{
    add(string){
        let added = 0;
        let output = string.replace(/[^\d.-]/g, '');
        let checkNegative = parseInt(output);

        if(string == "") {
            return "0"; // check the string is not empty
        } else if (checkNegative < 0) {
            return "negatives not allowed " + output;
            
        } else {
            for(let i =0; i < output.length; i++){
                let changed = parseInt(output[i]);
                added = added + changed;
            }return added;
        }
    }

}
