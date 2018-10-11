let fMultiplier = function(array_) {
  return array_.reduce((valorAnterior, valorActual)=>{
     return valorAnterior * valorActual;
  });
} 

//It doubles every single item of the array
let fDoublefier = function(array_){  
  return array_.map(function(valorActual){
    return valorActual*2;
  });
}

let fAdd_ = function(array_) {   
  return array_.reduce((valorAnterior, valorActual) => {
     return valorAnterior + valorActual;
  });
} 

export {fAdd_,fMultiplier,fDoublefier};