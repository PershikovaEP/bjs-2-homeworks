"use strict";

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    };

    set state(state) {
        if (state < 0) {
            this._state = 0;
        }
        if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);
        
        if (book === undefined) {
            book = null;
        }
       
        return book;       
    }

    giveBookByName(bookName) {
        if (this.books.some(book => book.name === bookName)) {
            let index = this.books.findIndex(book => book.name === bookName);
            let book = this.books.find(book => book.name === bookName)
            delete this.books[index];
            this.books = this.books.filter(book => book !== "");
            return book;
        } else {
            return null;
        }
    }

} 


class Student {
    constructor(name) {
      this.name = name;
    }

 
    addMark(mark, subjectName) {
        if (this.subject === undefined) {
            this.subject = [new Subject(mark, subjectName)];
        } else {
            if (this.subject.some(e => e.name === subjectName)) {
                let index = this.subject.findIndex(e => e.name === subjectName);
                (this.subject[index].mark).push(mark);
            } else {
            this.subject.push(new Subject(mark, subjectName));
            }
        }    
    }

    getAverageBySubject(subjectName) {
        if (this.subject.some(e => e.name === subjectName)) {
            let index = this.subject.findIndex(e => e.name === subjectName);
            let arrElements = Object.assign(this.subject[index].mark);
            let sum = arrElements.reduce((acc, item) => { return acc + item; }, 0);
            let average = sum / arrElements.length; 
            return average; 
        } else {
            return "несуществующий предмет";
        }              
    }


    getAverage() {
        let average = 0;
        let averageSubject = 0;
        for (let i = 0; i < this.subject.length; i ++) {
            let arrElements = Object.assign(this.subject[i].mark);
            let sum = arrElements.reduce((acc, item) => { return acc + item; }, 0);
            averageSubject += sum / arrElements.length; 
        }
        average = averageSubject / this.subject.length;
        return average;
    }
      
    exclude() {
        if (this.subject.some(e => e.mark.some(e => e < 1) || e.mark.some(e => e > 5))) {
            return "Исключен за попытку подделать оценки";
        }
    } 
}

class Subject {
    constructor(mark, subjectName) {
        this.name = subjectName;
        if (this.mark === undefined) {
            this.mark = [mark]; 
        } else {
            this.mark.push(mark);
        }
    }
}



