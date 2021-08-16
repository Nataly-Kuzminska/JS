'use strict';
const button = document.getElementById('start');
const buttonPlusIncome = document.getElementsByTagName('button')[0];
const buttonPlusExpences = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeButton1 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeButton2 = document.querySelectorAll('.additional_income-item')[1];
const budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
const expencesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value')[0];
const totalAdditionalExpences = document.getElementsByClassName('result-total additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
const targetMonthValue =document.getElementsByClassName('result-total target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expencesTitle = document.querySelector('.expenses-title');
const expencesAmount = document.querySelector('.expenses-amount');
const additionalExpencesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');


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
  percentDeposit: 0,
  moneyDeposit: 0, 
  mission: 50000,
  period: 3,
  asking: function() {
    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
    let itemIncome,
    startTwo = function() {
    do {
      itemIncome = prompt('Какой у вас дополнительный заработок?');
    }
      while(isNumber(itemIncome));
    };
    startTwo();

    let cashIncome,
    startThree = function() {
    do {
    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
     }
    while(!isNumber(cashIncome)); 
  };
    startThree();
 
      appData.income[itemIncome] = cashIncome;
    }

    let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpences = addExpences.toLowerCase().split(', '); 
    for(let i=0; i<appData.addExpences.length; i++) {
      let newArray = [];
      newArray.push(appData.addExpences[i].trim().charAt(0).toLocaleUpperCase() + appData.addExpences[i].trim().substr(1).toLocaleLowerCase());
    appData.addExpences = newArray;
     console.log(appData.addExpences);
    }


    for (let i = 0; i < 2; i++) {
    let str;
    let num;
    do {
    str = prompt('Введите обязательную статью расходов');
    }
    while (isNumber(str));

    do {
    num = prompt('Во сколько это обойдется?');
    }
    while(!isNumber(num));
     appData.expences[str] = num;
    }

       appData.deposit = confirm('Есть ли у вас депозит в банке?');

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
      do {
      appData.moneyDeposit = prompt('Какая сумма заложена?');
      }
    while(!isNumber(appData.moneyDeposit));

      do {
      appData.percentDeposit = prompt('Какой годовой процент?');
      }
    while(!isNumber(appData.percentDeposit));
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
    appData.getInfoDeposit();
    appData.calcSavedMoney();
  
    console.log('Расходы за месяц: ' + appData.expencesMonth);
    console.log(appData.period);
    console.log(appData.getStatusIncome());

    console.log(button);
    console.log(buttonPlusIncome);
    console.log(buttonPlusExpences);
    console.log(additionalIncomeButton1);
    console.log(additionalIncomeButton2);
    console.log(budgetMonthValue);
    console.log(budgetDayValue);
    console.log(expencesMonthValue);
    console.log(additionalIncomeValue);
    console.log(totalAdditionalExpences);
    console.log(incomePeriodValue);
    console.log(targetMonthValue);
    console.log(salaryAmount);
    console.log(incomeTitle);
    console.log(incomeAmount);
    console.log(expencesTitle);
    console.log(expencesAmount);
    console.log(additionalExpencesItem);
    console.log(depositAmount);
    console.log(depositPercent);
    console.log(targetAmount);
    console.log(periodSelect);