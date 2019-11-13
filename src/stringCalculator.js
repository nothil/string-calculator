module.exports = class stringCalculator{
    add(string){
        let added = 0;
        let output = string.split(/[\n\,]/);
        if(string == ""){
            return "0";
        }
        else{
            for(let i =0; i < output.length; i++){
                let changed = parseInt(output[i]);
                added = added + changed;
            }return added;
        }
    }

}
