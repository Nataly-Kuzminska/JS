'use strict';
let money;
let income = 'Фриланс';
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let accumulatedMonth;
let budgetDay;
let mission = 400000; 
let period = 4;
let expencesAmount;
let expences = [];

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let start = function() {
  do {
  money = prompt('Ваш месячный доход?');
  }
  while(!isNumber(money));
  
};

let showTypeOf = function(item) {
  console.log(typeof item);
};


let getExpencesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
  
  expences[i] = prompt('Введите обязательную статью расходов');

  sum += +prompt('Во сколько это обойдется?'); 
  }
  console.log(sum); 
  return sum;
};

let getAccumulatedMonth = function() {
  return money - expencesAmount;
};


let getTargetMonth = function() {
  if(getTargetMonth < 0) {
    prompt('Цель не будет достигнута');
  } else {
  return mission/accumulatedMonth;
  }
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



showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

start();
getTargetMonth();
getStatusIncome();
expencesAmount = getExpencesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetDay = money - accumulatedMonth;

console.log('Расходы за месяц: ' + expencesAmount);
console.log(addExpences.split(','));
console.log(budgetDay);
console.log(period);
console.log(expences);




