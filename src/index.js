import Person from './person';

let persons =[
    new Person("Paco","ElMaco",Person.getRoles().USER),
    new Person("Paca","LaMaca",Person.getRoles().TEACHER),
    new Person("Root","Toot",Person.getRoles().ADMIN)
];

document.addEventListener("DOMContentLoaded",function(){
    let select = document.getElementById("selectPerson");
    select.onchange = changedPerson;
    persons.forEach((item)=>{
        var o = document.createElement("option");
        o.text = item.name+" "+item.surname+" ("+item.rol+")";
        o.value = item.name+item.surname;
        select.appendChild(o);
    });    
});

function changedPerson(event){
    alert('gggg -> '+event.target.value);
};

console.log('Arre gat!!');