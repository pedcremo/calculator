fAdd_ = function(array_) {   
  return array_.reduce((valorAnterior, valorActual) => {
     return valorAnterior + valorActual;
  });
}

fMultiplier = function(array_) {
  return array_.reduce((valorAnterior, valorActual)=>{
     return valorAnterior * valorActual;
  });
} 

//It doubles every single item of the array
fDoublefier = function(array_){
  return array_.map(function(valorActual){
    return valorActual*2;
  });
}

export {fAdd_,fMultiplier,fDoublefier};