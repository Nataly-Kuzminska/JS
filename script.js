'use strict';
const startBtn = document.getElementById('start');
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
const AppData = function() {
  this.income = {};
  this.incomeMonth = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
};
AppData.prototype.check = function() {
    if(salaryAmount.value !== '') {
      startBtn.removeAttribute('disabled');
    }
  };
  
const appData = new AppData();
console.log(appData);

  /*startBtn.addEventListener('click', appData.start);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);
  periodSelect.addEventListener('input', function() {
    incomePeriodValue.textContent = appData.budgetMonth * periodSelect.value; 
  });
  


  for(let key in appData) {
      console.log('Наша программа включает в себя данные: ' + key + ':' + appData[key]);
    }

*/  

