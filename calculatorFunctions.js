//const NoCalculatorFunctionNameError = require('./customExceptions');

module.exports.fAdd = function(array_) {   
  return array_.reduce((valorAnterior, valorActual) => {
     return valorAnterior + valorActual;
  });
}

module.exports.fMultiplier = function(array_) {
  return array_.reduce((valorAnterior, valorActual)=>{
     return valorAnterior * valorActual;
  });
} 
//It doubles every single item of the array
module.exports.fDoublefier = function(array_){
  return array_.map(function(valorActual){
    return valorActual*2;
  });
}
/*let operationObject={
  'add':fAdd,
  'multiplier':fMultiplier,
  'doublefier':fDoublefier
};*/

let exceptionNotOperands = {'code':1,'message':'Can call calculator with an empty array'};

/*function calculator(array_,operation_){  
  try {
    if (array_.length<=0) return 0; 
    let fOperation=operationObject[operation_];
    if (typeof fOperation !== "function") throw new NoCalculatorFunctionNameError(); 
    return operationObject[operation_](array_);   
  } catch (error) {    
      console.log(error.name+" "+error.message);
      return error.constructor;
  }
  
}*/

//module.exports = calculator;