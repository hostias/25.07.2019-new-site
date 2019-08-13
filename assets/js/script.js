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


// let num = 50;
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


  //  let num = 50;
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
/*
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
*/
// let num = 20;
function showFirstMessage(text) { // функция, имя функции для того чтоб вызвать ее в будущем (если имени нет - значит анонимная и тут и сейчас используется)
    // далее аргумент - (text) - может быть сколько угодно, нужны для того чтоб функция с ними работала
    console.log(text);
    let num = 15; // переменная внутри функции - локальная и не видна далее
    console.log  (num); // 

showFirstMessage('lol'); // вызвали функцию, с одним аргументом
console.log  (num);

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


    /* функция которая прячет по клику

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
*/

    // console.log(calc(3,4));
    // console.log(calc(4,7));
    // function calc (a,b) { //калькулятор
    //     return (a + b);
    // }
    // console.log(calc(3,4));
    // console.log(calc(4,7));
/*
    let calc = function  (a,b) { //калькулятор но работает только ПОсле того как код до него дошел а функция работает до обьявления
    return (a + b);
    }
    console.log(calc(3,4));
    console.log(calc(4,7));


    //let calc = (a,b) => a+b; //тот же самый калькулятор
    console.log(calc(3,4));
    console.log(calc(4,7));


function retVar() {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());


let twelve = "12.2px";
// console.log (Math.round(twelve));
console.log (parseInt(twelve));
console.log (parseFloat(twelve));
*/

/*11 call back function*/

function first () {
    setTimeout(() => {
        console.log(1);
    }, 500);
}

function second () {
    console.log(2);
}

first ();
second();

function learnJS(lang, callback) { // call back функция выполнится четко после предыдущей, если 2 параметр кал бек и его выполнить и запустить 
    console.log('I learn' + lang);
    callback();
} 
function done () {
    console.log('I learn 3-rd lessons');
}
learnJS('Java Script', done);

 /*12 Objeck*/
let obj = new Object () //устарело никто не пользуется

let options = { // object
    width: 1024,
    height: 1025,
    name: 'test',
};

console.log(options.name);
options.bool = false; // записали в обьект новую пару
options.colors = { // создаем обьект в обьекте
    border: 'black',
    background: 'red',
};
delete options.bool;

console.log(options);


for (let key in options) { // for in специальный цыкл для перебора каждый метод(свойство) обьекта
    console.log('свойство ' + key + ' имеет значение ' + options[key]) // формарует цикл где вначале идет ключь по циклу а потом значение так же по цыклу
}
console.log(Object.keys(options).length);


/*13 massive*/

//let arr = ['first',2,3,'five',6,7];
/*
arr[99] =  99;
console.log (arr.length); //100
console.log (arr);

arr.forEach(function(item, i, mass) {// 1 -  переберающийся елемент из масива, 2 номер нашего элемента, 3 название масива
    console.log (i + ': ' + item + "(massive: " + mass + ')');
 });


arr.pop(); // удалить последнее значение  
arr.push('12'); //добавить  в конец значение 
arr.shift(); // удаляет первое значение
arr.unshift('1'); //добавляет первое значение 

for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i])
}

let massive = [1,3,4,6,9];

for (let key in massive) { // выдает только ключи
    console.log(key);
}
for (let key of massive) { //выдает только значения
    console.log(key);
}
*/
let ans = prompt("", ""),
    arr =[];

    arr = ans.split(','); // метод который по разделителю "," размещает елементы в масив
    console.log(arr);

    let arr = ['wqer','wqersdf', 'asaqeddrfzffxv','rewrsdf'];
    console.log(arr);
    i = arr.join(', ');  // метод который соединяет все елементы в одну строчку через разделитель пробел и запятую
    console.log(i);


    let arr = ['wqer','wqersdf', 'asaqeddrfzffxv','rewrsdf'];
    console.log(arr);
    i = arr.sort();  // метод который сортирует по алфавиту
    console.log(arr); // внимание изменяет изначальный массив

    let arr = ['7','1', '75','17'];
    console.log(arr);
    let i = arr.sort(compareNum);  // метод который сортирует по алфавиту
    function compareNum(a, b) {
        return a-b;
    }
    console.log(arr); // внимание изменяет изначальный массив
    console.log(i); 
/*Обьекты ООП*/
let soldier = {
    health: 400,
    armor: 100
}
let John = {
    health:100
};
John.__proto__= soldier; //John теперь потомок прототипа-обьекта soldier
console.log(John);
console.log(John.armor, John.health); 