function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let amount = 0;
  let avg;

  // проходим по циклу
  // for (let i = 0; i < arr.length; i++) {
  //   // добавляем элемент к сумме для вычисления
  //   sum += arr[i]
  //   // условие если элемент массива больше предыдущего max, то max равен элементу
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  //   // условие если элемент массива меньше предыдущего min, то min равен элементу
  //   if (arr[i] < min) {
  //     min = arr[i]
  //   }
  // }

  // условие если в массиве нет ничего
  if (arr.length === 0) {
    return 0;
  }
  // проходим по методу (Math.min/max, reduce())
  max = Math.max(...arr);
  min = Math.min(...arr);
  amount = arr.reduce((sum, current) => sum + current, 0);
  // находим среднее арифметическое
  avg = parseFloat((amount / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  // первый метод через цикл
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum = sum + arr[i];
  // }
  // return sum;

  // условие если в массиве нет ничего
  if (arr.length === 0) {
    return 0;
  }
  // второй метод с помощью методов (reduce)
  let amount = arr.reduce((sum, current) => sum + current, 0);

  return amount;
}

function differenceMaxMinWorker(...arr) {
  let max;
  let min;
  let diffMaxMin;
  // условие если в массиве нет ничего
  if (arr.length === 0) {
    return 0;
  }
  // нахождение min и max в массиве
  max = Math.max(...arr);
  min = Math.min(...arr);
  // нахождение разницы между min и max
  diffMaxMin = max - min;

  return diffMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diffEvenOdd;
  // условие если в массиве нет ничего
  if (arr.length === 0) {
    return 0;
  }
  // прохождение по циклу четности элементов в массиве
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  // нахождение разности между суммой четности и нечетности
  diffEvenOdd = sumEvenElement - sumOddElement;

  return diffEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let div;
  // условие если в массиве нет ничего
  if (arr.length === 0) {
    return 0;
  }
  // прохождение по циклу четности элементов и количество
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  // нахождение деления между суммой четных элементов на количество
  div = sumEvenElement / countEvenElement;

  return div;
}

function makeWork(arrOfArr, func) {
  // let maxWorkerResult = -Infinity;
  let maxWorkerResult = func(...arrOfArr[0]);
  // прохождение по циклу перебираемого элемента в массиве
  for (let i = 0; i < arrOfArr.length; i++) {
    // каждый общеперебираемый элемент в функцию-насадку
    let arrTotal = func(...arrOfArr[i]);
    // условие если общеперебираемый элемент больше максммума
    if (arrTotal > maxWorkerResult) {
      maxWorkerResult = arrTotal;
    }
  }

  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
