const index=require('../src/index.js');

beforeEach(()=> {
    // Set up our document body
  document.body.innerHTML =
  '<form>'+
  '<select id="selectPerson" name="selectPerson">'+  
  '       <!-- TO FILL --> '+
  '</select>	<br><br>'+
  '<div id="operands">'+
  '  Operand: <input type="number" name="foperand1"><br>'+
  '</div>'+
  '<button type="button" id="buttonNewOperand">New operand</button> <br>'+
  '<br>'+
  '<select id="selectFunction">'+
  '       <!-- TO FILL -->'+             
  '</select>'+	
  '<br><br>'+

  '<button type="button" id="buttonCalculate">CALCULTATE!</button>'+
  
   '</form>'+
'<h1 id="hResult">Result:</h1>';
  
});

test('Primer test select Person list html tag is filled', () => {
  // This module has a side-effect
  const $ = require('jquery');
  console.log("GGGGG");
  document.addEventListener("DOMContentLoaded",()=>{
    console.log("NUM options"+$('#selectPerson option').length);  
  });
  /*$().ready(() => {
    console.log("NUM options"+$('#selectPerson option').length);
 
  });*/
  

  // Use jquery to emulate a click on our button
  
  $('#buttonNewOperand').click();

  
  
});