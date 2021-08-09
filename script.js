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
    for (let i = 0; i < 2; i++) {
    appData.expences[prompt('Введите обязательную статью расходов')] = +prompt('Во сколько это обойдется?');
    let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpences = addExpences.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
  getExpencesMonth: function() {
    for(let key in appData.addExpences) {
    appData.expences += appData.addExpences[key];
    }
    }
  getBudget: function() {
    appData.budgetMonth = (money + appData.depozit)- appData;
    appData.budgetDay = budgetMonth/30;
    } 

  getTargetMonth: function() {
    appData.period = appData.mission/ appData.budgetMonth;
    if(appData.period < 0) {
      prompt('Цель не будет достигнута');
    }
    }
  getStatusIncome: function() { 
    if (appData.budgetDay >= 1200) {
      console.log('Высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && budgetDay < 1200) {
      console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && budgetDay >= 0) {
      console.log('К сожалению уровень дохода у вас ниже среднего');
    } else if (appData.budgetDay < 0) {
      console.log('Что-то пошло не так');
    }
    }


    for(let key in appData) {
      console.log('Наша программа включает в себя данные: ' + key + ':' + appData[key]);
    }


    appData.asking();
    appData.getExpencesMonth();
    appData.getBudget();
    appData.getTargetMonth();
    appData.getStatusIncome(budgetDay);
    accumulatedMonth = appData.getAccumulatedMonth();
    budgetDay = money - accumulatedMonth();


    console.log('Расходы за месяц: ' + getExpencesAmount());
    console.log(getTargetMonth());
    console.log(getStatusIncome());
  },
};
}
