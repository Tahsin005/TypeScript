class Person {
    public name;
    public age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name: string, age: number, public employeeId: number) {
        super(name, age);
    }

    getDetails(): string {
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
    readonly id: number;

    constructor(id: number, public name: string) {
        this.id = id;
    }
}


// optional properties
class Person2 {
    constructor(public name: string, public age: number, public gender?: string) {

    }
}

// Parameter Properties

// You can declare properties directly in the constructor parameters.

class Person3 {
    constructor(public name: string, public age: number) {}
}


// getter and setters
class Person4 {
    private _age: number;

    constructor(public name: string, age: number) {
        this._age = age;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
}


// static properties and methods
class Person5 {
    static species: string = "Homo sapiens";

    constructor(public name: string) {}
}

// Accessing static member
console.log(Person5.species); // "Homo sapiens"


// Abstract Classes and Methods

// Abstract classes cannot be instantiated and can have abstract methods that must be implemented by subclasses.


abstract class Animal {
    abstract makeSound(): void; // abstract method

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}