// Форматтер чисел
// функция парсинга значении и проверка isNaN
function parseCount(value) {
  const number = Number.parseFloat(value);
  if (isNaN(number)) {
    throw new Error('Невалидное значение');
  }
  return number;
}

// функция проверка валидности
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Треугольник
// класс - треугольник
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || c + b < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  // геттер периметр треугольника
  get perimeter() {
    return this.a + this.b + this.c;
  }

  // геттер площадь треугольника. формула Герона. 
  get area() {
    const p = 0.5 * (this.a + this.b + this.c);
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }

}

// функция треугольника, имеющие три строны a b c. Проверка валидности
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch (err) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}

