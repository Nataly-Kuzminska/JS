'use strict';
let money = prompt('Какой ваш месячный доход?');
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = !!(prompt('Есть ли у вас депозит в банке'));
let expences1 = prompt('Введите обязательную статью расходов');
let expences2 = prompt('Введите обязательную статью расходов');
let amount1 = +(prompt('Во сколько это обойдется?'));
let amount2 = +(prompt('Во сколько это обойдется?'));
let budgetMonth = amount1 + amount2;
let mission = 400000;
let period = Math.ceil(mission/budgetMonth);
let budgetDay = budgetMonth/30;

if (budgetDay >= 1200) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению уровень дохода у вас ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так');
}

console.log(budgetMonth);
console.log(Math.floor(budgetDay));



