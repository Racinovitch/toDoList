let myBody=document.querySelector("body");
let cadre=document.createElement("div");
cadre.setAttribute("id","cadre");
myBody.appendChild(cadre);

let input1=document.createElement("input");
cadre.appendChild(input1);
input1.setAttribute("id","inputElem");
input1.setAttribute("placeholder","Votre tâche?");

let btn=document.createElement("button");
btn.textContent="+ Add";
btn.setAttribute("id","btn");
cadre.appendChild(btn);

let liste=document.createElement("div");
liste.setAttribute("id","liste");
myBody.appendChild(liste);

let title=document.createElement("h3");
title.textContent="Ma to-do list";
liste.appendChild(title);

let done=document.createElement("button");
done.textContent="Déjà fait";
liste.appendChild(done);

let notYet=document.createElement("button");
notYet.textContent="A faire";
liste.appendChild(notYet);

let allOf=document.createElement("button");
allOf.textContent="Tous";
liste.appendChild(allOf);

let clear=document.createElement("button");
clear.textContent="Clear";
cadre.appendChild(clear);
let ligne;
let task;
let btnCheck;
let editer;
let erase;

btn.addEventListener("click",()=>{
    ligne=document.createElement("div");
    liste.appendChild(ligne);

    task=document.createElement("input");
    task.value=input1.value;
    task.setAttribute("disabled","disabled");
    input1.value="";
    ligne.appendChild(task);

    btnCheck=document.createElement("input");
    btnCheck.setAttribute("type","checkbox");
    ligne.appendChild(btnCheck);

    editer=document.createElement("button");
    editer.textContent="editer";
    ligne.appendChild(editer);

    erase=document.createElement("button");
    erase.textContent="erase";
    ligne.appendChild(erase);

    editer.addEventListener("click",()=>{
        task.removeAttribute("disabled");
        task.setAttribute("enabled","enabled");
    });
    
    task.addEventListener("focusout",()=>{
        task.removeAttribute("enabled");
        task.setAttribute("disabled","disabled");
    });

    erase.addEventListener("click",()=>{
        task.value="";
    });
})