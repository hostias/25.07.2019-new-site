'use strict';

let money = prompt('Ваш бюджет на месяц?'); //budget
let time = prompt("Введите дату в формате", "YYYY-MM-DD"); // date




let expenseOne = prompt('Введите обязательную статью расходов в этом месяце', 'Введите обязательную статью расходов в этом месяце');
let expenseTwo = prompt  ('Во сколько обойдется?', 'Во сколько обойдется?');


let expenses = {  //  expenses: {“ответ на первый вопрос” : “ответ на второй вопрос”}
    first: expenseOne,
    second: expenseTwo

};
console.log(expenses);
let optionalExpenses = {
};

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: [],
    savings: false,
};
alert (money/30);