// Задание 1

function TransferToNumSystem(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum) || secondNum < 2) {
        alert('Error!');
    }
    else {
        alert(firstNum.toString(secondNum));
    }
}

// Задание 2

function FindingSumAndQuotient(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum) || secondNum == 0) {
        alert('Error!');
    }
    else {
        let str = prompt('Введите значение');
        alert(`${str} ${firstNum + secondNum} ${firstNum / secondNum}`);
    }
}

let firstNum = parseInt(prompt('Введите первое число'));
let secondNum = parseInt(prompt('Введите второе число'));

TransferToNumSystem(firstNum, secondNum);

firstNum = parseFloat(prompt('Введите первое число'));
secondNum = parseFloat(prompt('Введите второе число'));

FindingSumAndQuotient(firstNum, secondNum);