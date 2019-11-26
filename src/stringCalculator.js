
 module.exports = class stringCalculator{
    add(string){
        let added = 0;
    let output = string.replace(/[^\d.-]/g, '');
        let checkNegative = parseInt(output);

    // try{

        let  negs = "";

        for (var i = 0; i <= string.length; i++){
            if(string[i] === "-" && !isNaN(string[i+1])){
                negs += "-" + string[i + 1] + " ";
            }
        }

        if(negs != ""){
            throw new Error("Negatives are not allowed " + negs);
        }

        if(string == "") {
            return "0"; // check the string is not empty
        } else {
            for(let i =0; i < output.length; i++){
                let changed = parseInt(output[i]);
                added = added + changed;
            }return added;
        }
    // }catch(Error){
    //     return Error
    // }
    }
}