"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
class Employee extends Person {
    constructor(name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }
    getDetails() {
        return `${this.greet()} and my ID is ${this.employeeId}`;
    }
}
// Access Modifiers
//     Public: Accessible everywhere.
//     Private: Accessible only within the class.
//     Protected: Accessible within the class and subclasses.
// class Person {
//     private ssn: string; // private property
//     constructor(public name: string, public age: number) {}
// }
// readonly properties
class Person1 {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
}
// optional properties
class Person2 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// Parameter Properties
// You can declare properties directly in the constructor parameters.
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// getter and setters
class Person4 {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
}
// static properties and methods
class Person5 {
    constructor(name) {
        this.name = name;
    }
}
Person5.species = "Homo sapiens";
// Accessing static member
console.log(Person5.species); // "Homo sapiens"
// Abstract Classes and Methods
// Abstract classes cannot be instantiated and can have abstract methods that must be implemented by subclasses.
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
