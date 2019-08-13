'use strict';

let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц?', ""); //budget
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); // date

    while (isNaN(money) || money == '' || money==null) { //проверка на пустую строку, нулл, и неизвестные символы
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
    chooseExpenses: function () {
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
       }
    },
    detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100 ) {
            console.log('it`s a minimum');
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('it`s a medium');
            } else if (appData.moneyPerDay > 2000) {
            console.log('it`s a high');
            } else {
            console.log('Error'); 
            }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt ('Какова сумма накоплений?', ''),
            percent = +prompt ('Под какой процент?', '');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с депозита:' + appData.monthIncome);
        }
    },
    choosenOptExpenses: function () {
        for (let i=1; i < 4; i++){
            let as = +prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = as;
        }
    },
    chooseIncome: function () {
        for ( let i=0; i < 1; i++ ){

        let items = prompt ('Что принесет дополнительный доход? (перечислите через запятую)', ""); //в переменную поместили вопрос
       
        if ((typeof(items)) === 'string' && (typeof (items)) !=null && items != false && items !='') {
                console.log('done');

                appData.income = items.split(', '); // в масив из обьекта помещаем переменную выше+ вводим метод сортьировки через запятую
                appData.income.push(prompt('Может что-то еще?')); // добавляем метод к масиву инком, который добавит в конец масива
                appData.income.sort(); // сортируем масив по алфавиту

            appData.income.forEach ( function ( item, i, mass ) {// 1 -  переберающийся елемент из масива, 2 номер нашего элемента, 3 название масива
            alert (i+1 + ": Способы доп. заработка: " + item + "(massive: " + mass + ')');
         })

              } else {
                   i = i-1;
              } 
        }
        
        
    },
    result: function () {for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + ' имеет значение ' + appData[key])
    }}

};


/*

chooseIncome: function () {
    
    let items = prompt ('Что принесет дополнительный доход? (перечислите через запятую)', ""); //в переменную поместили вопрос
    

    while ( typeof(items)) === 'string' && (typeof (items)) !=null && items != false && items !=''){
        appData.income = items.split(', '); // в масив из обьекта помещаем переменную выше+ вводим метод сортьировки через запятую
        appData.income.push(prompt('Может что-то еще?')); // добавляем метод к масиву инком, который добавит в конец масива
        appData.income.sort(); // сортируем масив по алфавиту 
        
        
        items = prompt ('Что принесет дополнительный доход? (перечислите через запятую)', "");
    }
}
*/
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

// // function chooseExpenses () { // перенесли в обьект
// //     for ( let i=0; i < 2; i++ ){ // создаем цыкл со счетчиком в 2 раза
// //              let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
// //                 b = prompt  ('Во сколько обойдется?', '');
// //                 if ( (typeof(a)) === 'string' && (typeof (a)) !=null && (typeof (b)) !=null 
// //                 && a !='' && b !='' && a.length<50 && b.length<50) {
// //                     console.log('done');
// //                    appData.expenses[a] = b; // создаем обьект и пару --- ключ = значение в обьекте
// //                } else {
// //                     i = i-1;
// //                }   
// //         };
// // }
// // chooseExpenses();




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
// // // function detectDayBudget () { // перенесли в обьект
// // //     appData.moneyPerDay = (appData.budget / 30).toFixed(2);
// // //     alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
// // // }
// // // detectDayBudget ();

//appData.moneyPerDay = (appData.budget / 30).toFixed(2); //.toFixed - до целого числа если пусто, в нашем случае до второго после запятой - возвращает стринг
//alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
 
// // // function detectLevel () { // перенесли в обьект
// // //     if (appData.moneyPerDay < 100 ) {
// // //         console.log('it`s a minimum');
// // //         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// // //         console.log('it`s a medium');
// // //         } else if (appData.moneyPerDay > 2000) {
// // //         console.log('it`s a high');
// // //         } else {
// // //         console.log('Error'); 
// // //         }
// // // }
// // // detectLevel ();

// if (appData.moneyPerDay < 100 ) {
//     console.log('it`s a minimum');
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('it`s a medium');
//     } else if (appData.moneyPerDay > 2000) {
//     console.log('it`s a high');
//     } else {
//     console.log('Error'); 
//     }



// let arr = ['plum.png','orange.jpg','apple.bmp'];
// console.log(arr[0]);
// alert('helo world');
// confirm ('ask');

// // // // function checkSavings() { // перенесли в обьект
// // // //     if (appData.savings == true) {
// // // //         let save = +prompt ('Какова сумма накоплений?', ''),
// // // //         percent = +prompt ('Под какой процент?', '');
// // // //         appData.monthIncome = save/100/12*percent;
// // // //         alert('Доход в месяц с депозита:' + appData.monthIncome);
// // // //     }
// // // // }
// // // // checkSavings();

// // // // function choosenOptExpenses () {  // перенесли в обьект
// // // //     for (let i=1; i < 4; i++){
// // // //     let as = +prompt('Статья необязательных расходов?', '');
// // // //     appData.optionalExpenses[i] = as;
// // // // }}
// // // // choosenOptExpenses ();
