"use strict"; // строгий режим
// функция для решения дискриминанта с тремя параметрами a,b,c
function solveEquation(a, b, c) {
  let arr = []; // объявление массива
  let discriminant = Math.pow(b, 2) - 4 * a * c; // объявления дискриминанта и присвооение формулы
  // условие 1 если дискриминант больше 0, то два корня в рните результат из фумассив
  // условие 2 если дискриминант меньше 0, то ничего не делаем
  // условие 3 если дискриминант равен 0, то 1 корень в массив
  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if (discriminant < 0) {
  } else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr; // возвращаем результат
}

// функция для решения дискриминанта с тремя параметрами a,b,c
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // проверка значения isNaN
  if (isNaN(ParseInt(percent)) === true || ParseInt(percent) < 0) {
    return 'Неверно введен первый параметр';
  } else if (isNaN(ParseInt(contribution)) === true || ParseInt(contribution) < 0) {
    return 'Неверно введен второй параметр';
  } else if (isNaN(ParseInt(amount)) === true || ParseInt(amount) < 0) {
    return 'Неверно введен третий параметр';
  } else if (isNaN(ParseInt(countMonths)) === true || ParseInt(countMonths) < 0) {
    return 'Неверно введен четвертый параметр';
  }

  // преобразование процентной ставки от 0 до 100 из диапазоне от 0 до 1 и из готовой ставки в месячную
  let interestRate = percent / 100 / 12;
  // тело кредита = сумма кредита - первоначальный взнос
  let loanBody = amount - contribution;
  // ежемесячная оплата с формулой
  monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  // общая сумма = ежемесячная оплата * период
  totalAmount = monthlyPayment * countMonths;
  // возвращаем результат до двух значений после запятой. Результат должен быть числом
  return ParseInt(totalAmount.toFixed(2));
}


