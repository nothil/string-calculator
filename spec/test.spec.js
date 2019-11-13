let stringCalculator = require('../src/stringCalculator');

let calculator = new stringCalculator;

describe("function takes a string",function() {       
    it("return ", function(){
     expect(calculator.add("")).toEqual("0");
    });

    it("function for adding many number", function(){
     expect(calculator.add("1,2")).toEqual(3);
     });
    it("should allow method to hadle new lines", function(){
        expect(calculator.add("")).toMatch("/[\n\,]/");

    });
});


console.log(calculator.add("1\n2"));