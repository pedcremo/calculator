import Person from './person';

let persons = new Map();
persons.set('PacoElMaco',new Person("Paco","ElMaco",Person.getRoles().USER));
persons.set('PacaLaMaca',new Person("Paca","LaMaca",Person.getRoles().TEACHER));
persons.set('RootToot',new Person("Root","Toot",Person.getRoles().ADMIN));

let selectedOperation='';

document.addEventListener("DOMContentLoaded",function(){
    let changeEvent = new Event('change');
    let selectPerson = document.getElementById("selectPerson");
    selectPerson.addEventListener("change",changedPerson);    
    document.getElementById("selectFunction").addEventListener("change",changedFunction);    
       
    persons.forEach((item)=>{
        let o = document.createElement("option");
        o.text = item.name+" "+item.surname+" ("+item.rol+")";
        o.value = item.name+item.surname;
        selectPerson.appendChild(o);
    });    
   if (!selectedOperation)  selectPerson.dispatchEvent(changeEvent); //Force first trigger 
   let newOperand = document.getElementById("buttonNewOperand");
   newOperand.addEventListener("click",addOperandInput);    
   document.getElementById("buttonCalculate").addEventListener("click",calculate);
});

//When select drop down HTML component changes we call it
function changedPerson(event){
    let targetValue;
    if (!event) {
        let firstPerson = persons.values().next().value;
        targetValue= firstPerson.name+firstPerson.surname;
    } else targetValue=event.target.value;
    
    let selectedPerson=persons.get(targetValue);
    let roles = selectedPerson.getAllowedFunctions();
    let selectRoles = document.getElementById("selectFunction");
    selectRoles.innerHTML = "";
    selectedOperation=roles[0].name;
    roles.forEach((item)=>{
        let o = document.createElement("option");
        o.text = item.name;
        o.value = item.name;
        selectRoles.appendChild(o);
    });   
};
function changedFunction(event) {
    selectedOperation = event.target.value;
}
function addOperandInput(event){
    const divOperands = document.getElementById('operands');
    let newInput = document.createElement("input"); 
    let newBr = document.createElement("br"); 
    let t = document.createTextNode("Operand: ");
    
    newInput.setAttribute("type","number");
    newInput.setAttribute("name","foperand"+divOperands.children.length);
    divOperands.appendChild(t);
    divOperands.appendChild(newInput);
    divOperands.appendChild(newBr);

};

function calculate() {
    let inputsOperands=document.querySelectorAll('input[type=number]');
    let iOps=[];
    //Put input operands values ian an array 
    [].forEach.call(inputsOperands,function(item){
        iOps.push(parseInt(item.value));
    });
   
    let selectedPerson = document.getElementById("selectPerson");
    let selectedPersonValue = selectedPerson.options[selectedPerson.selectedIndex].value;
    let calculatedValue=persons.get(selectedPersonValue).calculator(iOps,selectedOperation);
    document.getElementById("hResult").innerHTML="Result: "+calculatedValue;

}