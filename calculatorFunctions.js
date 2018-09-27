//module.exports.
export fAdd = function(array_) {   
  return array_.reduce((valorAnterior, valorActual) => {
     return valorAnterior + valorActual;
  });
}

//module.exports.
export fMultiplier = function(array_) {
  return array_.reduce((valorAnterior, valorActual)=>{
     return valorAnterior * valorActual;
  });
} 
//It doubles every single item of the array
//module.exports.
export fDoublefier = function(array_){
  return array_.map(function(valorActual){
    return valorActual*2;
  });
}

