"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // a * x**2 + b * x + c = 0;  уравнение
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } else if (discriminant === 0) {
      arr.push(-b / (2 * a));
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (Number.isNaN(Number(percent))) {
    return totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение ' + '\"' + percent + '\"';
  } else {
    percent = Number(percent);
  }

    if (Number.isNaN(Number(contribution))) {
    return totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение ' + '\"' + contribution + '\"';
  } else {
    contribution = Number(contribution);
  }

    if (Number.isNaN(Number(amount))) {
    return totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение ' + '\"' + amount + '\"';
  } else {
    amount = Number(amount);
  }

  let loanBody = amount - contribution;
  date = new Date(date);
  let currentDate = new Date;  
  let month = date.getMonth() - currentDate.getMonth() + 
  (12 * (date.getFullYear() - currentDate.getFullYear()));
  let interestRate = percent / 12 / 100;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** month) - 1)));
  totalAmount = Number((monthlyPayment * month).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}
