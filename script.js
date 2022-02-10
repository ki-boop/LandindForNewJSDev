let personeName = document.getElementById('person');

var score = 0;



const task0 = ()=>{
    let name = prompt("Как вас зовут?");
    console.log(name);
    if ((isNaN(name))){
        alert('Hello, ' + name);
        sessionStorage.setItem('Name', JSON.stringify(name));
        personeName.style.display = 'block';
        personeName.innerText = name;
    }else task0();
}

const task1 = () =>{
    let foundation = parseInt(prompt("Введите основание треугольника: "),10);
    let height = parseInt(prompt("Введите высоту треугольника: "),10);
        let res = foundation*height/2;
        if(!isNaN(res) && foundation>0 && height>0) alert("Площадь треугольника: " + res);
        else alert("Вы указали неправильные числа");
}

const task2 = () =>{
    alert("Провека длины двух строк")
    let str1 = prompt("Первая строка");
    let str2 = prompt("Вторая строка");
        if (str1.length == str2.length) alert("Строки одинаковой длины")
        else alert("Строки разной длины")
    }

const task3 = () =>{
    let arr = [];
    for (let i = 0; i<5; i++){
        arr.push(parseInt(prompt("Введите число"),10));
        if(isNaN(arr[i])) {
            arr.pop();
            alert("Ввели неправильное число")
            return
        }
    }
    
    alert("Max " + Math.max(... arr) + " Min " + Math.min(... arr))
}

let time = document.getElementById('time');
let pause = false;
let sec=0,min =0;
let inter;
const task4 =()=>{
    let timer = document.getElementById('timer');
    timer.style.display = 'block';
}

const task4Start = () =>{
    
    if (!pause){
        sec++;
        if (sec<10) sec = '0'+sec;
        if (sec == 60){
          min++;
          sec = 0;
        }
        time.innerHTML = min + ":" + sec;
    }else return;
         
}
const start = () =>{
    sec=0;
    min=0;
    pause=false
    inter = setInterval(task4Start,1000);
}
const task4Stop = () =>{
    pause=true;
    clearInterval(inter);
    return;
}

const task5 = () =>{
    let test1 = document.getElementById('second-floor');
    test1.style.display = 'flex';
    let test2 = document.getElementById('first-floor');
    test2.style.display = 'flex';

}

const testButt=(numTask)=>{
    let block = document.getElementById('scoreTest');
    block.style.display = 'block';
    let answer= document.getElementById('a'+numTask);
    let curr = document.getAnimations('a');
    console.log(numTask)
    if(answer.checked && answer.value==0) {
        score++;
        answer.parentNode.parentNode.childNodes[0].style.backgroundColor = 'green';
        answer.value = 1;
    }
    if(!answer.checked && answer.value==1){
        if (answer.parentNode.parentNode.childNodes[0].style.backgroundColor == 'green') score--;
        answer.parentNode.parentNode.childNodes[0].style.backgroundColor = 'red';
        answer.value=0;
    }
    if (!answer.checked){
        answer.parentNode.parentNode.childNodes[0].style.backgroundColor = 'red';
    }
    block.innerText = score +'/10';
}



const enterName = () =>{
    
}
var ii=0;k=100;
const task6 = () =>{

    
    let img = document.getElementById('animate');
    img.style.display='block';
    let place = document.getElementById('placeName')
    let placeDate = document.getElementById('date')
    let name = sessionStorage.getItem ('Name');
    placeDate.innerText = new Date().getDate()+"." + new Date().getMonth()+"."+new Date().getFullYear();
    place.innerText=name;
    img.addEventListener("click", (event)=>{
        console.log(k)
        console.log(ii);
        
        const timerI = setInterval(() => {
            ii=80;
            k++;
            ii=100-k;
            img.style.opacity = ii/100 ;
            if(ii <= 0||k>=100) clearInterval(timerI);
            if (k==100) img.style.display='none';
        }, 20);
       
    })
    
       
        const timerI = setInterval(() => {
        k--;
        ii=100-k;
        img.style.opacity = ii/100 ;
        if(k <= 0||ii>=100) clearInterval(timerI);
    }, 20);

    k=100;
    ii=0;

}
    



