class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Невозможно идентифицировть будильник. Параметр id не передан");
        }

        if (this.alarmCollection.some(element => element.id === id)) {
            console.error("Будильник с таким id существует");
            return;
        }

        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id) {
        if (this.alarmCollection.some(element => element.id === id)) {
            this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
            return true;
        }

        return false;    
    }

    getCurrentFormattedTime() {
        let time = new Date();
        let hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
        let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
        let currentDate = `${hours}:${minutes}`;
        return currentDate;
    }

    start() {
        
        function checkClock(call) {                                      
            if (call.time === this.getCurrentFormattedTime()) {
                return call.callback();
            }
        }

        checkClock = checkClock.bind(this);
        
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                (this.alarmCollection).forEach((call) => console.log(call));
            });          
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((call) => {            
            console.log(`Будильник №${call.id} заведен на ${call.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


let clock = new AlarmClock;

function newTime(minute) {
    let time = new Date();
    let hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    let newMinutes = time.getMinutes() + minute;
    let minutes = newMinutes < 10 ? `0${newMinutes}` : `${newMinutes}`;
    let newTime = `${hours}:${minutes}`;
    return newTime;
}

function testCase() { //добавление звонков
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 1);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 2);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 3);
    clock.printAlarms();
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Давай, вставай уже!"), 1);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Вставай!"));  
      
}

function testCase1() { //удаление одного звонка
    clock.addClock(newTime(2), () => console.log("Пора вставать"), 4);
    clock.removeClock(4);
    clock.printAlarms();
}

function testCase2() { //старт и стоп звонка
    clock.addClock(newTime(1), () => console.log("Пора вставать"), 5);
    clock.start();
    setTimeout(() => clock.stop(), 65000);
        
}

function testCase3() { //удаление всех звонков
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 6);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 7);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 8);
    clock.clearAlarms();
    clock.printAlarms();
      
}