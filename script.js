'use strict';
let money = +prompt('Какой ваш месячный доход?');
let income = 'Фриланс';
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expences1 = prompt('Введите обязательную статью расходов?');
let amount1 = +(prompt('Во сколько это обойдется?'));
let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = +(prompt('Во сколько это обойдется?'));
let budgetDay;
let accumulatedMonth;
let mission = 400000;
let period = 4;

let showTypeOf = function (item) {
  console.log(typeof item);
};

let getExpencesMonth = function () {
  return amount1 + amount2;
};

let getAccumulatedMonth = function () {
  return money - getExpencesMonth();
};

let getTargetMonth = function () {
  return mission / accumulatedMonth;
};

function getStatusIncome(budgetDay) {
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

accumulatedMonth = getAccumulatedMonth();
budgetDay = money - accumulatedMonth;

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

getExpencesMonth();
getTargetMonth();
getStatusIncome();
console.log('Расходы за месяц: ' + getExpencesMonth());
console.log(addExpences.split(','));
console.log(budgetDay);
console.log(period);





