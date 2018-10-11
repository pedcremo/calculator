import {fAdd_,fMultiplier,fDoublefier} from './calculatorFunctions'
import {get} from './utils';
import {NoCalculatorFunctionNameError,AccessDeniedError} from './customExceptions';

const ROL={USER:'regular user',ADMIN:'root',TEACHER:'teacher'};

let operationDictionary=[
    {name:'ADD', operator:fAdd_,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},
    {name:'MULTIPLIER', operator:fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},
    {name:'DOUBLEFIER', operator:fDoublefier,roles:[ROL.TEACHER]}
];


/**
 * Person class. We store personal information
 *
 * @constructor
 */

export default class Person {    
    /**
    * Create a person
    * @param {string} name - Person name
    * @param {string} surname - Person surname
    * @param {string} rol - Person rol group  
    */
    
    constructor(name,surname,rol=ROL.USER){
        this.name = name;
        this.surname = surname;
        this.rol = rol;    
    }
    /** Static method to obtain available roles for all Persons */
    static getRoles(){
        return ROL;
    }
    /** Static method to get new functions to enhance our dictionary */
    static getNewFunctions(callback){
        get('paquita.json',function(response){
            operationDictionary=[...operationDictionary,...JSON.parse(response)];
            callback();
        });
    }
    /** Let me to operate over some operands applying the operator functions if my rol is granted */
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
    /** Get an array of allowed functions to be used in calculator */
    getAllowedFunctions() {
        return operationDictionary.filter(item => item.roles.includes(this.rol));
    }
}