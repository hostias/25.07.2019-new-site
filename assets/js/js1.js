'use strict';

let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц?', ""); //budget
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); // date

    while (isNaN(money) || money == '' || money==null) {
        money = +prompt('Ваш бюджет на месяц?', "");
    }
}
start ();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

// for ( let i=0; i < 2; i++ ){ // создаем цыкл со счетчиком в 2 раза
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt  ('Во сколько обойдется?', '');
//         if ( (typeof(a)) === 'string' && (typeof (a)) !=null && (typeof (b)) !=null 
//         && a !='' && b !='' && a.length<50 && b.length<50) {
//             console.log('done');
//             appData.expenses[a] = b; // создаем обьект и пару --- ключ = значение в обьекте
//         } else {
//             i = i-1;
//         }   
// };

function chooseExpenses () {
    for ( let i=0; i < 2; i++ ){ // создаем цыкл со счетчиком в 2 раза
             let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt  ('Во сколько обойдется?', '');
                if ( (typeof(a)) === 'string' && (typeof (a)) !=null && (typeof (b)) !=null 
                && a !='' && b !='' && a.length<50 && b.length<50) {
                    console.log('done');
                   appData.expenses[a] = b; // создаем обьект и пару --- ключ = значение в обьекте
               } else {
                    i = i-1;
               }   
        };
}
chooseExpenses();




/*
let i = 0;
while (i < 2 ){
    i++;
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt  ('Во сколько обойдется?', '');
        if ( (typeof(a)) === 'string' && (typeof (a)) !=null && (typeof (b)) !=null 
        && a !='' && b !='' && a.length<50 && b.length<50) {
            console.log('done');
            appData.expenses[a] = b; // создаем обьект и пару --- ключ = значение в обьекте
        } else {
        }   

};*/
/*
let i = 0;
do {
  i++;
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt  ('Во сколько обойдется?', '');
        if ( (typeof(a)) === 'string' && (typeof (a)) !=null && (typeof (b)) !=null 
        && a !='' && b !='' && a.length<50 && b.length<50) {
            console.log('done');
            appData.expenses[a] = b; // создаем обьект и пару --- ключ = значение в обьекте
        } else {
        }   
} while (i < 2);
*/

appData.moneyPerDay = (appData.budget / 30).toFixed(2); //.toFixed - до целого числа если пусто, в нашем случае до второго после запятой - возвращает стринг

alert ('Ежедневный бюджет: ' + appData.moneyPerDay);


if (appData.moneyPerDay < 100 ) {
    console.log('it`s a minimum');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('it`s a medium');
    } else if (appData.moneyPerDay > 2000) {
    console.log('it`s a high');
    } else {
    console.log('Error'); 
    }



// let arr = ['plum.png','orange.jpg','apple.bmp'];
// console.log(arr[0]);
// alert('helo world');
// confirm ('ask');

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt ('Какова сумма накоплений?', ''),
        percent = +prompt ('Под какой процент?', '');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с депозита:' + appData.monthIncome);
    }
}
checkSavings();