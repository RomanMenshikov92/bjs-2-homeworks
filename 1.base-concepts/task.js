"use strict"; // строгий режим
// функция для решения дискриминанта с тремя параметрами a,b,c
function solveEquation(a, b, c) {
  let arr = []; // объявление массива
  let discriminant = Math.pow(b, 2) - 4 * a * c; // объявления дискриминанта и присвооение формулы
  // условие 1 если дискриминант больше 0, то два корня верните результат из массива
  // условие 2 если дискриминант меньше 0, то ничего не делаем
  // условие 3 если дискриминант равен 0, то 1 корень в массив
  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr; // возвращаем результат
}

// функция для решения кредита ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // проверка значения isNaN и меньше 0
  if (isNaN(Number.parseInt(percent)) === true || Number.parseInt(percent) < 0) {
    return false;
  } else if (isNaN(Number.parseInt(contribution)) === true || Number.parseInt(contribution) < 0) {
    return false;
  } else if (isNaN(Number.parseInt(amount)) === true || Number.parseInt(amount) < 0) {
    return false;
  } else if (isNaN(Number.parseInt(countMonths)) === true || Number.parseInt(countMonths) < 0) {
    return false;
  }

  // преобразование процентной ставки от 0 до 100 из диапазоне от 0 до 1 и из готовой ставки в месячную
  let interestRate = percent / 100 / 12;
  // тело кредита = сумма кредита - первоначальный взнос
  let loanBody = amount - contribution;
  // ежемесячная оплата с формулой
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  // общая сумма = ежемесячная оплата * период
  let totalAmount = monthlyPayment * countMonths;
  // возвращаем результат до двух значений после запятой. Результат должен быть числом
  return Number.parseFloat(totalAmount.toFixed(2));
}


