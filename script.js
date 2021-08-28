'use strict';
const start = document.getElementById('start');
const btnPlus = document.getElementsByTagName('button');
const incomePlus =btnPlus[0];
const expensesPlus = btnPlus[1];
const buttonPlusExpences = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const additionalIncomeButton2 = document.querySelectorAll('.additional_income-item')[1];
const budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
const targetMonthValue =document.getElementsByClassName('result-total target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const expencesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items'); 
let incomesItems = document.querySelectorAll('.additional_income-title title');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
let incomeItem = document.querySelectorAll('.income-items');

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {
  sum: 0,
  income: {},
  incomeMonth: 0,
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
  start: function() {
    if(salaryAmount.value === '') {
    alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
    return;
  }
  appData.budget = +salaryAmount.value;

  appData.getExpenses();
  appData.getIncome();
  appData.getExpensesMonth();
  appData.getAddExpenses();
  appData.getAddIncome();
  appData.getBudget();

  appData.showResult();

  },
  showResult: function() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();
    periodSelect.addEventListener('input', appData.rangeValue);
  },

  rangeValue: function() {

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
  addIncomeBlock: function() {
    let cloneIncomesItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomesItem, incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
    console.log(incomeItem.parentNode);
    if(incomeItem.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getIncome: function() {
    incomeItem.forEach(function(item){
      let itemIncomes = item.querySelector('.income-title').value;
      let cashIncomes = item.querySelector('.income-amount').value;
      if(itemIncomes !== '' && cashIncomes !== '') {
        appData.income[itemIncomes] = cashIncomes;
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
    
  getExpensesMonth: function() {
    for(let key in appData.expenses) {
    appData.expensesMonth += +appData.expenses[key];
    }
    },
  getBudget: function() {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },

  getTargetMonth: function() {
    return targetAmount.value / appData.budgetMonth;
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
     appData.deposit = confirm('Есть ли у вас депозит в банке?');
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

  calcPeriod: function() {
    return appData.budgetMonth * periodSelect.value;
  },
};


  start.addEventListener('click', appData.start);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);
  


  for(let key in appData) {
      console.log('Наша программа включает в себя данные: ' + key + ':' + appData[key]);
    }

  

