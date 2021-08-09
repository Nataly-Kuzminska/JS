'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let money,
start = function() {
  do {
  money = prompt('Ваш месячный доход?');
  }
  while(!isNumber(money)); 
};

start();

let accumulatedMonth;
let sum;
let budgetDay;
let expencesMonth;
let expencesAmount;
let expences = [];

let appData = {
  sum: 0,
  income: {},
  budget: money,
  budgetDay: 0, 
  budgetMonth: 0,
  expencesMonth: 0,
  addIncome: [],
  expences: {},
  addExpences: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function() {
    for (let i= 0; i <  2; i++) {
    appData.expences[prompt('Введите обязательную статью расходов')] = +prompt('Во сколько это обойдется?');
    let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpences = addExpences.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
  getExpencesMonth: function(sum) {
    for(let sum in appData) {
    appData[sum] = appData.expencesMonth;
    }
    }
  getBudget: function() {
    return money - expencesAmount;
    } 
  getTargetMonth: function() {
    appData.period = appData.mission/ appData.getAccumulatedMonth();
    if(appData.period < 0) {
      prompt('Цель не будет достигнута');
    }
    }
  getStatusIncome: function(budgetDay) { 
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
  
    appData.asking();
    appData.getStatusIncome(budgetDay);
    appData.getTargetMonth();
    expencesMonth = appData.getExpencesMonth();
    accumulatedMonth = appData.getAccumulatedMonth();
    budgetDay = money - accumulatedMonth;

    console.log('Расходы за месяц: ' + expencesAmount);
    console.log(budgetDay);
    console.log(appData.period);
    console.log(appData.expences);
  },


