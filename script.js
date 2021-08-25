'use strict';
const start = document.getElementById('start');
const btnPlus = document.getElementsByTagName('button');
const incomePlus =btnPlus[0];
const expensesPlus = btnPlus[1];
const buttonPlusExpences = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeButton2 = document.querySelectorAll('.additional_income-item')[1];
const budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
const targetMonthValue =document.getElementsByClassName('result-total target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expencesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items'); 
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {
  sum: 0,
  income: {},
  budget: 0,
  budgetDay: 0, 
  budgetMonth: 0,
  expensesMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0, 
  mission: 50000,
  period: 3,
  start: function() {
    if(salaryAmount.value === '') {
    alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
    return;
  }
  appData.budget = salaryAmount.value;

  appData.getExpenses();


  appData.getExpensesMonth();
  appData.getBudget();
  appData.getAddExpenses();
  appData.getAddIncome();
  appData.showResult();

  },
  showResult: function() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
  },

  addExpensesBlock: function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
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

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', '); 
    for(let i=0; i<appData.addExpenses.length; i++) {
      let newArray = [];
      newArray.push(appData.addExpenses[i].trim().charAt(0).toLocaleUpperCase() + appData.addExpenses[i].trim().substr(1).toLocaleLowerCase());
    appData.addExpenses = newArray;
     console.log(appData.addExpenses);
    }

       appData.deposit = confirm('Есть ли у вас депозит в банке?');

    },
  getExpensesMonth: function() {
    for(let key in appData.expenses) {
    appData.expensesMonth += +appData.expenses[key];
    }
    },
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
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

  start.addEventListener('click', appData.start);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);

  for(let key in appData) {
      console.log('Наша программа включает в себя данные: ' + key + ':' + appData[key]);
    }

  

