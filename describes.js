var idtask;
var txt;
var speed=200;
var i =0;
var count =0;
var timeout;

function typeWriter (obj) {
    if (i<txt.length){
        console.log(i);
        idtask.childNodes[0].innerText+=txt.charAt(i);
        i++;
    }
    timeout =  setTimeout(typeWriter, speed);
    
}
let idtask0 = document.getElementById('task0')
let des0 = document.getElementById('des0');

idtask0.addEventListener("mouseleave", (event)=>{
    idtask0.childNodes[0].innerText = "0";
    count=0;
    clearTimeout(timeout);
    i=0;
    des0.style.display = 'none';
})

idtask0.addEventListener("mouseover", (event)=>{
    
    if(count == 0){
        txt="Приветствие";
        idtask=idtask0;
        idtask0.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des0.style.display = 'block';

})

let idtask1 = document.getElementById('task1')
let des1 = document.getElementById('des1');

idtask1.addEventListener("mouseleave", (event)=>{
    idtask1.childNodes[0].innerText = "1";
    count=0;
    clearTimeout(timeout);
    i=0;
    des1.style.display = 'none';
    
})
idtask1.addEventListener("mouseover", (event)=>{
    
    if(count == 0){
        txt="Площадь";
        idtask=idtask1;
        idtask1.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des1.style.display = 'block';
})


let idtask2 = document.getElementById('task2')
let des2 = document.getElementById('des2');

idtask2.addEventListener("mouseleave", (event)=>{
    idtask2.childNodes[0].innerText = "2";
    count=0;
    clearTimeout(timeout);
    i=0;
    des2.style.display = 'none';
    
})
idtask2.addEventListener("mouseover", (event)=>{
    if(count == 0){
        txt="Сравнение";
        idtask=idtask2;
        idtask2.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des2.style.display = 'block';
})

let idtask3 = document.getElementById('task3')
let des3 = document.getElementById('des3');

idtask3.addEventListener("mouseleave", (event)=>{
    idtask3.childNodes[0].innerText = "3";
    count=0;
    clearTimeout(timeout);
    i=0;
    des3.style.display = 'none';
    
})
idtask3.addEventListener("mouseover", (event)=>{
    if(count == 0){
        txt="Max&Min";
        idtask=idtask3;
        idtask3.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des3.style.display = 'block';
})

let idtask4 = document.getElementById('task4')
let des4 = document.getElementById('des4');

idtask4.addEventListener("mouseleave", (event)=>{
    idtask4.childNodes[0].innerText = "4";
    count=0;
    clearTimeout(timeout);
    i=0;
    des4.style.display = 'none';
    
})
idtask4.addEventListener("mouseover", (event)=>{
    if(count == 0){
        txt="Таймер";
        idtask=idtask4;
        idtask4.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des4.style.display = 'block';
})

let idtask5 = document.getElementById('task5')
let des5 = document.getElementById('des5');

idtask5.addEventListener("mouseleave", (event)=>{
    idtask5.childNodes[0].innerText = "5";
    count=0;
    clearTimeout(timeout);
    i=0;
    des5.style.display = 'none';
    
})
idtask5.addEventListener("mouseover", (event)=>{
    if(count == 0){
        txt="ТестJS";
        idtask=idtask5;
        idtask5.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des5.style.display = 'block';
})

let idtask6 = document.getElementById('task6')
let des6 = document.getElementById('des6');

idtask6.addEventListener("mouseleave", (event)=>{
    idtask6.childNodes[0].innerText = "6";
    count=0;
    clearTimeout(timeout);
    i=0;
    des6.style.display = 'none';
    
})
idtask6.addEventListener("mouseover", (event)=>{
    if(count == 0){
        txt="Анимация";
        idtask=idtask6;
        idtask6.childNodes[0].innerText = "";
        typeWriter();
        count=1;
    }
    des6.style.display = 'block';
})