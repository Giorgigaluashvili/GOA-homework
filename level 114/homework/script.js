class Temperature {
    constructor(celsius) {
      this._celsius = celsius; // ინახავს ცელსიუსში ტემპერატურას
    }
  
    // Getter რომელიც აბრუნებს ფარენჰეიტში გადაყვანილ მნიშვნელობას
    get fahrenheit() {
      return this._celsius * 9/5 + 32;
    }
  
    // Setter რომელიც იღებს ცელსიუსში მნიშვნელობას
    set celsius(value) {
      this._celsius = value;
    }
  }
  
  const temp = new Temperature(25);
  
  console.log(temp.fahrenheit);
  
  temp.celsius = 30;
  console.log(temp.fahrenheit); 


// ------------------------------------------------------------


class Student {
    constructor() {
      this._score = 0; 
    }
  
    set score(value) {
      if (value < 0 || value > 100) {
        console.log("Invalid score. Please enter a value between 0 and 100.");
      } else {
        this._score = value;
      }
    }
  
    get grade() {
      if (this._score >= 90) {
        return 'A';
      } else if (this._score >= 80) {
        return 'B';
      } else if (this._score >= 70) {
        return 'C';
      } else if (this._score >= 60) {
        return 'D';
      } else {
        return 'F';
      }
    }
  }
  
  const student = new Student();
  
  student.score = 85;
  console.log(student.grade);
  
  student.score = 92;
  console.log(student.grade); 
  
  student.score = 105;