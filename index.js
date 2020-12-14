// Задание 1

function FirstTask(firstNum, secondNum) {
    if (!parseInt(firstNum) || !parseInt(secondNum)) {
        alert('Error!');
    }
    else {
        alert(firstNum.toString(secondNum));
    }
}

// Задание 2

function SecondTask(firstNum, secondNum) {
    if (!parseInt(firstNum) || !parseInt(secondNum)) {
        alert('Error!');
    }
    else {
        let str = prompt('Введите значение');
        alert(str + ` ${firstNum + secondNum}` + ` ${firstNum / secondNum}`);
    }
}

let firstNum = parseInt(prompt('Введите первое число'));
let secondNum = parseInt(prompt('Введите второе число'));

FirstTask(firstNum, secondNum);

firstNum = parseInt(prompt('Введите первое число'));
secondNum = parseInt(prompt('Введите второе число'));

SecondTask(firstNum, secondNum);