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

let incr = 10,
    decr = 10;

    incr++;
    decr--;

console.log (incr);
console.log (decr);

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