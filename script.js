
let money = 70000;
let income = 'freelance';
let addExpences = 'internet, taxi, medicine';
let deposit = true;
let mission = 400000;
let period = 12;
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpences.length);
console.log('Период равен ' + period + ' месяцев');
console('Цель заработать ' + mission + ' гривен');
let newAddExpences = addExpences.toLowerCase().split('');
console.log(newAddExpences);
let budgetDay = money/30;
console.log(budgetDay);
