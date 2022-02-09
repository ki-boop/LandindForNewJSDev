let personeName = document.getElementById('person');



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
    alert(Math.max(... arr))
}
    



