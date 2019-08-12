'use strict';



// console.log (letBorderWidth);


var letBorderWidth = 1;
let second =2;
const pi = 3.14;

// console.log (letBorderWidth); 

var number = 5;
var string = 'hello';
var symbol = Symbol ();
var boolean = true;
null; 
undefined;

var obj = {};

let persone = {
    name: 'John',
    age: 25,
    isMarried: false
};

// console.log(persone.name);

console.log(persone[ "name", "age" ]);


let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[2]);

// alert ('weqweasd');

// let answer = confirm('Are you here?');
// console.log(answer);

// let answer = prompt('Are you 18?', 'Yes');
// console.log(typeof(arr));

// console.log('arr' + ' - object'); //string
// console.log(4 + ' - object'); //string
// console.log(4 + +' - object'); // nan - number
// console.log(4 + 7); //number
/*
let incr = 10,
    decr = 10;

    incr++; //увеличит на 1
    decr--; //уменьшит на 1

console.log (incr); //если плюс до ++incr то выведется 11 если после то вывод будет 10 но после добавится до 11
console.log (decr);
*/
let isChecked = true,
    isClose = false;
    console.log(isChecked && isClose); // operator and (i)
    console.log(isChecked || isClose); // oreraror or (ili)
    console.log(isChecked || !isClose);


    if (2*4 === 7) {
console.log('correctly')
    } else {
        console.log('incorrectly')
    }

let num = 50;

if (num < 49) {
    console.log ('incorrectly')
} else if (num>100) {
    console.log ('too much')
} else {
    console.log ('enough')
}

(num == 50) ? console.log('enough') : console.log('incorrectly');


let num = 50;
switch (num) {
    case num < 49: 
    console.log('enough');
    break;
    case num > 100:
    console.log('too much');
    break;
    case num > 80:
    console.log('too much 2');
    break;
    case  50: // just write what is the value
    console.log('enough');
    break;
    default: 
    console.log ('something wrong');
    break;
}
/*цыклы*/
let three = 3,
    two = "3";
    console.log(three === two);

    for (let i=1; i<=8; i++) {
        console.log (i*i);
    }


    let num = 50;
    // while (num < 55 ) {
    //     console.log(num);
    //     num++;
    // }

    do {
        console.log(num);
        num++;
    }
    while (num<55);

    for (let i = 1; i < 8; i++){
        if (i==6) {
            continue;
        }
        console.log(i)
    }

    let x = 5; console.log( x++ ); 
    let y = [ ] + false - null + true;  console.log( y );
    let y = 1; let x = y = 2; console.log(x);
    let x = [ ] + 1 + 2; console.log(x); let y = typeof (x); console.log(y);
    alert( "1"[0] ); console.log("1"[0]);
    let x = 2 && 1 && null && 0 && undefined; console.log( x );
    let a=1, b =2; 
    let z = !!( a && b ); let x = (a && b);
    z==x ? console.log('yes') : console.log('no');
    console.log(z); console.log(x);

    console.log( null || 2 && 3 || 4 ); 	
    
    let a = [1, 2, 3], b = [1, 2, 3];
    if (a==b){
        console.log('yes');
    } else {
        console.log('no');
    }
    console.log( +"Infinity" );

let a = "яблоко", g ="ёжик";
    if (g > a) {
        console.log('yes');
} else {
    console.log('no');
}

console.log(a);
console.log(b);

let x = 0 || "" || 2 || undefined || true || false ;
console.log (x);

let y = 0 || "" || 0 || 0 || 9 && 1  || 6  || 7  || 8 ;
console.log (y);


let y = "";
console.log (y);

let num = 20;
function showFirstMessage(text) { // функция, имя функции для того чтоб вызвать ее в будущем (если имени нет - значит анонимная и тут и сейчас используется)
    // далее аргумент - (text) - может быть сколько угодно, нужны для того чтоб функция с ними работала
    console.log(text);
    let num = 15; // переменная внутри функции - локальная и не видна далее
    console.log  (num); // 

showFirstMessage('lol'); // вызвали функцию, с одним аргументом
console.log  (num);



function z(a) {
    let a = 1;
    return function (a) {
    return a++;
   }
}
let a = z(3);
console.log (a) ;


/* //пример замыкания
let c = 5;
function addX(x) {
  return function(n) {
    return n + x;
  }
}
const addThree = addX(3);
let d = addThree(c);
console.log('пример фиксации аргумента:', d);*/


function makeShout() { // (1)
        var phrase = "Превед!"  // (2)
        var shout = function() {  // (3,4)
            console.log(phrase)
        }
        phrase = "Готово!"  // (5)
        return shout
    }
    shout = makeShout()
    // что выдаст?
    shout();


    function addHideHandler(sourceId, targetId) {
        // создан объект [[scope]] со свойствами sourceId, targetId
    
        // записать в [[scope]] свойство sourceNode
        var sourceNode = document.getElementById(sourceId)
    
        // записать в [[scope]] свойство handler
        var handler = function() {
            var targetNode = document.getElementById(targetId)
            targetNode.style.display = ‘none’
        }
    
        sourceNode.onclick = handler
    
        // функция закончила выполнение
        // (***) и тут - самое интересное!
    }


    // console.log(calc(3,4));
    // console.log(calc(4,7));
    // function calc (a,b) { //калькулятор
    //     return (a + b);
    // }
    // console.log(calc(3,4));
    // console.log(calc(4,7));

    let calc = function  (a,b) { //калькулятор но работает только ПОсле того как код до него дошел а функция работает до обьявления
    return (a + b);
    }
    console.log(calc(3,4));
    console.log(calc(4,7));



function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);