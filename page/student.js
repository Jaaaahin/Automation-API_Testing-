class Student {
  constructor(name, age, grades = []) {
    this.name = name;
    this.age = age;
    this.grades = grades;
    this.isPassing = this.averageGrade() >= 60;
  }

  setDetails(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
    this.isPassing = this.averageGrade() >= 60;
    console.log(`Details set for ${this.name}: Age - ${this.age}, Grades - ${this.grades}, Passing - ${this.isPassing}`);
  }

  addGrade(grade) {
    this.grades.push(grade);
   // this.isPassing = this.averageGrade() >= 60;
  }

  averageGrade() {
    if (this.grades.length === 0) return 0;
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  isPassing() {
    return this.averageGrade() >= 60;
  }
}

// Example usage
const student1 = new Student("John Doe", 20, [85, 90, 78]);
student1.setDetails("John Doe", 20, [85, 90, 78]);

//abstraction 


class shape{
    constructor(name){
         if(new.target === shape) {
            throw new Error("Cannot instantiate abstract class shape");
    }
}
calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }
}

class Circle extends shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends shape {
    constructor(length, width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    
    calculateArea() {
        return this.length * this.width;
    }
}

class Cylinder extends shape {
    constructor(radius, height) {
            super("Cylinder");
            this.radius = radius;
            this.height = height;
    }
    calculateArea(){
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
}

// Example usage of abstraction
const circle = new Circle(5);
console.log(`Area of Circle: ${circle.calculateArea()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Area of Rectangle: ${rectangle.calculateArea()}`);

const cylinder = new Cylinder(3, 5);
console.log(`Area of Cylinder: ${cylinder.calculateArea()}`);

class BankAccount{
    #balance = 0;
    constructor(owner){
        this.owner = owner;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance +=amount;
             return `Deposited ${amount}. New balance is ${this.#balance}`;
        }
        return "Deposit amount must be positive.";
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            return `Withdrew ${amount}. New balance is ${this.#balance}`;
        }
        return "Insufficient funds or invalid amount.";
    }
    getBalance() {
        return this.#balance;
    }
}
// Example usage of BankAccount
const account = new BankAccount("Alice");
console.log(account.deposit(100)); // Deposited 100. New balance is 100
console.log(account.withdraw(50)); // Withdrew 50. New balance is 50
console.log(account.getBalance()); // 50

class Person {
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
    set age(newAge){
        if(newAge > 0 && newAge < 120) {
            this.#age = newAge;
        }else {
            throw new Error("Invalid age");
        }
    }
}


function Car(model,speed){
    let _speed = speed;
    
    this.accelerate = function(increment) {
        _speed += increment;
        console.log(`Accelerated to ${_speed} km/h`);
    };
    this.getSpeed = function() {
        return _speed;
    };
}
const myCar = new Car("Toyota", 0);
myCar.accelerate(50); // Accelerated to 50 km/h
console.log(`Current speed: ${myCar.getSpeed()} km/h`); // Current speed: 50 km/