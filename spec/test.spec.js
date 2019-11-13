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
         expect(calculator.add("1\n2")).toEqual(3);
     });

     it('should allow for different delimeters', function() {
         expect(calculator.add("//;\n1;2")).toEqual(3);
     });

     it('should allow for different delimeters', function() {
         expect(calculator.add("//;\n1;2#%6@!fd")).toEqual(9);
     });

     it('should add more than 4 numeric values0', function () {
         expect(calculator.add('11111')).toEqual(5);
     });
    
    it("should give an error msg negatives not allowed", function(){
        expect(calculator.add("-2")).toEqual("negatives not allowed -2");

    });

    it('should throw an error message there is more than one negatives', function(){
        expect(calculator.add("-2,-4,-5")).toEqual("negatives not allowed -2-4-5");
    });
});


//console.log(calculator.add("4\n2"));