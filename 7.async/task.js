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
        //Верните логическое значение об успешности/провале удаления объекта звонка из общего массива?

    }

    getCurrentFormattedTime() {
        let time = new Date();
        let hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
        let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
        let currentDate = `${hours}:${minutes}`;
        return currentDate;
    }

    start() {
        let clock = this;

        function checkClock(call) {                            
            if (call.time === clock.getCurrentFormattedTime()) {
                return call.callback;
            }
        }
        //не запускается интервал

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                (this.alarmCollection).forEach((items) => checkClock(items));
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
        this.alarmCollection.forEach((items) => {            
            console.log(`Будильник №${items.id} заведен на ${items.time}`);
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

function testCase() { 
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 1);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 2);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 3);
    clock.printAlarms();
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Давай, вставай уже!"), 1);
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Вставай!"));
    
}

function testCase1() { 
    clock.addClock(newTime(1), () => console.log("Пора вставать"), 4);
    clock.removeClock(4);
    console.log(clock.printAlarms());
}

function testCase2() { 
    clock.addClock(newTime(2), () => console.log("Пора вставать"), 5);
    clock.start();
    setTimeout(() => clock.stop(), 350000);
    clock.clearAlarms();
    clock.printAlarms();
}