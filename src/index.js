import Person from './person';

let persons = new Map();
persons.set('PacoElMaco',new Person("Paco","ElMaco",Person.getRoles().USER));
persons.set('PacaLaMaca',new Person("Paca","LaMaca",Person.getRoles().TEACHER));
persons.set('RootToot',new Person("Root","Toot",Person.getRoles().ADMIN));

let selectedOperation=''

document.addEventListener("DOMContentLoaded",function(){
    let changeEvent = new Event('change');
    let selectPerson = document.getElementById("selectPerson");
    selectPerson.addEventListener("change",changedPerson);    
       
    persons.forEach((item)=>{
        let o = document.createElement("option");
        o.text = item.name+" "+item.surname+" ("+item.rol+")";
        o.value = item.name+item.surname;
        selectPerson.appendChild(o);
    });    
   if (!selectedOperation)  selectPerson.dispatchEvent(changeEvent); //Force first trigger 
   let newOperand = document.getElementById("newOperand");
   newOperand.addEventListener("click",addOperandInput);    
});

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
    selectedOperation=roles[0];
    roles.forEach((item)=>{
        let o = document.createElement("option");
        o.text = item.name;
        o.value = item.name;
        selectRoles.appendChild(o);
    });   
};

function addOperandInput(event){
    const divOperands = document.getElementById('operands');
    let newInput = document.createElement("input"); 
    let newBr = document.createElement("br"); 
    let t = document.createTextNode("Operand:");
    
    newInput.setAttribute("type","number");
    newInput.setAttribute("name","foperand"+divOperands.children.length);
    divOperands.appendChild(newInput);
};