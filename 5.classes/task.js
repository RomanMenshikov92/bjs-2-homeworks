// класс - Печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  // метод fix, увеличивающий state(состояние) в полтора раза
  fix() {
    this.state *= 1.5;
  }
  // сеттер. num - число нового состояния печатного изделия
  set state(num) {
    if (num < 0) {
      this._state = 0;
    }
    if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }
  // геттер
  get state() {
    return this._state;
  }
}
// класс, наследуемый от класса PrintEditionItem. Magazine - журнал
class Magazine extends PrintEditionItem {
  constructor(type, name, releaseDate, pagesCount) {
    super(type, name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
// класс, наследуемый от класса PrintEditionItem. Book - книга
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, type) {
    super(name, releaseDate, pagesCount, type);
    this.author = author;
    this.type = "book";
  }
}
// класс, наследуемый от класса Book. NovelBook - для романов
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type) {
    super(author, name, releaseDate, pagesCount, type);
    this.type = "novel";
  }
}
// класс, наследуемый от класса Book. FantasticBook - для фантастических произведений
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type) {
    super(author, name, releaseDate, pagesCount, type);
    this.type = "fantastic";
  }
}
// класс, наследуемый от класса Book. DetectiveBook - для детективов.
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type) {
    super(author, name, releaseDate, pagesCount, type);
    this.type = "detective";
  }
}

// пример использования к задачке №1
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

// класс - библиотека
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  // метод, проверяющий состояние книг
  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    }
  }
  // метод, проверяющий найдена ли запрошенная книга
  findBookBy(type, value) {
    let findBook = this.books.find(book => book[type] === value);
    if (typeof findBook === 'object') {
      return findBook;
    } else {
      return null;
    }
  }
  // метод, проверяющий найдена ли книга и удаляет их хранилища books и возвращает ее
  giveBookByName(bookName) {
    let giveBook = this.books.find(book => book.name === bookName);
    if (typeof giveBook === 'object') {
      this.books.splice(this.books.indexOf(giveBook), 1);
      return giveBook;
    }
    else {
      return null;
    }
  }
}

// пример использования к задачке №2
const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


// класс - журнал успеваемости
class Student {
  constructor(name) {
    this.name = name;
    this.logMarks = {};
  }

  // метод, который добавляет оценку по предмету с условиями
  addMark(mark, subject) {
    // условие на наличие предмета
    if (this.logMarks.hasOwnProperty(subject) !== true) {
      this.logMarks[subject] = [];
      console.log('Нет предмета в журнале. Создаем новый предмет');
    }
    // условие на валидность оценок (<=2 и >=5)
    if ((typeof mark === 'number') && (mark >= 2) && (mark <= 5)) {
      this.logMarks[subject].push(mark);
      console.log('Оценка отмечена');
    } else {
      return console.log('Некорректно! Оценка должна валидироваться в диапазоне от 2 до 5');
    }
  }

  // метод getAverageBySubject, который будет возвращать среднюю оценку по одному предмету
  getAverageBySubject(subject) {
    if (this.logMarks.hasOwnProperty(subject) === true) {
      let marks = Object.values(this.logMarks[subject]);
      return marks.reduce((sum, item) => sum += item / marks.length, 0.0);
    } else {
      return 0;
    }
  }

  // метод, который возвращает общую среднюю оценку по всем предметам
  getAverage() {
    let marks = Object.values(this.logMarks);
    let arraySubject = [];
    marks.forEach((item) => arraySubject = [].concat(arraySubject, item));
    let avgMarks = arraySubject.reduce((sum, item) => sum += item / arraySubject.length, 0.0);
    return avgMarks;
  }
}

// пример использования к задачке №3
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75