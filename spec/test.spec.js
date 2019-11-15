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
// whatever dekimeter you add should not affect your output
     it('should add more than 4 numeric values', function () {
         expect(calculator.add("//;\n1;3#%4@!1f1d")).toEqual(10);
     });
    
    it("should give an error msg negatives not allowed", function(){
        expect(calculator.add("//;\n3,3")).toEqual(6);

    });

    
});

//testing 
console.log(calculator.add("2,@4"));