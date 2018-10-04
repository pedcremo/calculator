const index=require('../src/index.js');

test('Primer test', () => {
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
  // This module has a side-effect
  const $ = require('jquery');
 
  // Use jquery to emulate a click on our button
  
  $('#buttonNewOperand').click();

  
  
});