// Будильник-колыбельная
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  //метод, который добавляет новый звонок в коллекцию существующих.
  addClock(id, time, callback) {
    if (!time & !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.find((call) => call.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    return this.alarmCollection.push({ id, time, canCall: true })
  }

  // метод, который удаляет звонки по определённому времени.
  removeClock() {
    const oldArray = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((call) => call.time === time);
    const newArray = this.alarmCollection.length;
  }

  // метод, который возвращает текущее время в строковом формате HH:MM.
  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  // метод, который запускает будильник.
  start() {

  }

  // метод, который останавливает выполнение интервала будильника.
  stop() {

  }

  // метод, который сбрасывает возможность запуска всех звонков.
  resetAllCalls() {
    this.alarmCollection = this.alarmCollection.forEach((call) => call.canCall = true);
  }

  // метод, который удаляет все звонки.
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}