'use strict';
let money = +prompt('Какой ваш месячный доход?');
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?'));
let expences1 = prompt('Введите обязательную статью расходов');
let amount1 = +(prompt('Во сколько это обойдется?'));
let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = +(prompt('Во сколько это обойдется?'));
let mission = 400000;
let period = Math.ceil(mission/budgetMonth);
let budgetDay = accumulatedMonth/30;

function getExpencesMonth(amount1, amount2) {
  return amount1 + amount2;
}

function getAccumulatedMonth(money, budgetMonth) {
  let accumulatedMonth = getAccumulatedMonth();
  return money - budgetMonth;
  
}


function getTargetMonth(mission, accumulatedMonth) {
  return mission/accumulatedMonth;
}

function showTypeOf() {
  return typeof(income);
}

function getStatusIncome() {
if (budgetDay >= 1200) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению уровень дохода у вас ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так');
}
}

showTypeOf();
getExpencesMonth();
getTargetMonth();
getStatusIncome();
console.log(...addExpences);
console.log(Math.floor(budgetDay));



