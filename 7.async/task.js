// Будильник-колыбельная
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  //метод, который добавляет новый звонок в коллекцию существующих.
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.find((call) => call.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    return this.alarmCollection.push({ time, callback, canCall: true });
  }

  // метод, который удаляет звонки по определённому времени.
  removeClock(time) {
    return this.alarmCollection = this.alarmCollection.filter((call) => call.time !== time);
  }

  // метод, который возвращает текущее время в строковом формате HH:MM.
  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  // метод, который запускает будильник.
  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((call) => {
        if (call.time === this.getCurrentFormattedTime() && call.canCall) {
          call.canCall = false;
          call.callback();
        }
      });
    }, 1000)
    return;
  }


  // метод, который останавливает выполнение интервала будильника.
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  // метод, который сбрасывает возможность запуска всех звонков.
  resetAllCalls() {
    return this.alarmCollection.forEach((call) => call.canCall = true);
  }

  // метод, который удаляет все звонки.
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}