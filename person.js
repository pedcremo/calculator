const calculatorFunctions = require('./calculatorFunctions');
const ROL={USER:'regular user',ADMIN:'root',TEACHER:'teacher'};

let operationDictionary={
    ADD:{ operator:calculatorFunctions.fAdd,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},
    MULTIPLIER: { operator:calculatorFunctions.fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},
    DOUBLEFIER: { operator:calculatorFunctions.fDoublefier,roles:[ROL.TEACHER]}
  };

class Person {    
         
    constructor(name,surname,rol=ROL.USER){
        this.name = name;
        this.surname = surname;
        this.rol = rol;
    
    }
    
    calculator(operands,operator){
        try {
            if (operands.length<=0) return 0; 
            let fOperation=operationDictionary[operator].operator;
            if (typeof fOperation !== "function") throw new NoCalculatorFunctionNameError(); 
            return operationObject[operator](array_);   
          } catch (error) {    
              console.log(error.name+" "+error.message);
              return error.constructor;
          }
    }
}