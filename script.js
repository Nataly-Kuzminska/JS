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
  percentDepozit: 0,
  moneyDeposit: 0, 
  mission: 50000,
  period: 3,
  asking: function() {

    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
      appData.income[itemIncome] = cashIncome;
    }

    let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpences = addExpences.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
    appData.expences[prompt('Введите обязательную статью расходов')] = +prompt('Во сколько это обойдется?');
    }
    },
  getExpencesMonth: function() {
    for(let key in appData.expences) {
     appData.expencesMonth += +appData.expences[key];
    }
    },
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expencesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },

  getTargetMonth: function() {
    appData.period = appData.mission/appData.budgetMonth;
    if(appData.period < 0) {
      prompt('Цель не будет достигнута');
    }
    },
  getStatusIncome: function() { 
    if (appData.budgetDay >= 1200) {
      console.log('Высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      console.log('К сожалению уровень дохода у вас ниже среднего');
    } else if (appData.budgetDay < 0) {
      console.log('Что-то пошло не так');
    }
    },
  getInfoDeposit: function() {
    if(appData.deposit) {
      appData.percentDepozit = prompt('Какой годовой процент?', '10');
      appData.moneyDeposit = prompt('Какая сумма заложена?');
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  },
};

    for(let key in appData) {
      console.log('Наша программа включает в себя данные: ' + key + ':' + appData[key]);
    }

  
    appData.asking();
    appData.getExpencesMonth();
    appData.getBudget();
    appData.getTargetMonth();
    appData.getStatusIncome();
  
    console.log('Расходы за месяц: ' + appData.expencesMonth);
    console.log(appData.period);
    console.log(appData.getStatusIncome());

