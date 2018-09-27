import {fAdd_,fMultiplier,fDoublefier} from './calculatorFunctions'
import {NoCalculatorFunctionNameError,AccessDeniedError} from './customExceptions';

const ROL={USER:'regular user',ADMIN:'root',TEACHER:'teacher'};

let operationDictionary={
    'ADD':{ operator:fAdd_,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},
    'MULTIPLIER': { operator:fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},
    'DOUBLEFIER': { operator:fDoublefier,roles:[ROL.TEACHER]}
  };

export default class Person {    
         
    constructor(name,surname,rol=ROL.USER){
        this.name = name;
        this.surname = surname;
        this.rol = rol;    
    }

    static getRoles(){
        return ROL;
    }

    calculator(operands=[0],operator='ADD'){
        try {            
            let chosenOperation=operationDictionary[operator];
            if (!chosenOperation || typeof chosenOperation.operator !== "function") throw new NoCalculatorFunctionNameError(); 
            if (!chosenOperation.roles.includes(this.rol)) throw new AccessDeniedError(); 
            
            return chosenOperation.operator(operands);   
          } catch (error) {    
              console.log(error.name+" "+error.message);
              return error.constructor;
          }
    }
}