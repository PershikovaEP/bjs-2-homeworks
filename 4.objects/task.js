function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let stud1 = new Student("Oleg", "male", 26);
let stud2 = new Student("Olga", "female", 28);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = mark; 
    } else {
      this.marks.push(...mark);
    }
}

Student.prototype.getAverage = function () {
  let arrElements = Object.assign(this.marks);
  let sum = arrElements.reduce((acc, item) => { return acc + item; }, 0);
  let average = sum / this.marks.length; 
  return average; 
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;  
  this.excluded = reason;
}


