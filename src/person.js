import {fAdd_,fMultiplier,fDoublefier} from './calculatorFunctions'
import {NoCalculatorFunctionNameError,AccessDeniedError} from './customExceptions';

const ROL={USER:'regular user',ADMIN:'root',TEACHER:'teacher'};

let operationDictionary=[
    {name:'ADD', operator:fAdd_,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},
    {name:'MULTIPLIER', operator:fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},
    {name:'DOUBLEFIER', operator:fDoublefier,roles:[ROL.TEACHER]}
];

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
            let chosenOperation=operationDictionary.filter(item => item.name===operator)[0];//We only get first matched item
            if (!chosenOperation || typeof chosenOperation.operator !== "function") throw new NoCalculatorFunctionNameError(); 
            if (!chosenOperation.roles.includes(this.rol)) throw new AccessDeniedError(); 
            
            return chosenOperation.operator(operands);   
        } catch (error) {    
              console.log(error.name+" "+error.message);
              throw error;
        }
    }

    getAllowedFunctions() {
        return operationDictionary.filter(item => item.roles.includes(this.rol));
    }
}