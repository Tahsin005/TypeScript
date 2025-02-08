// generic function
function abcd<T>(a: T, b: string, c: number) {
    // console.log(a, b, c);
    // console.log(typeof a, typeof b, typeof c);
}

abcd<string>("tahsin", "male", 23);
abcd<number>(12, "male", 23);

// generic interface
interface FCB<T> {
    prop: T;
    age: number;
}

function userDetails<T>(obj: FCB<T>) {
    if (typeof obj.prop === "string") {
        console.log(`Name: ${obj.prop}`);
    }
    else if (typeof obj.prop === "number") {
        console.log(obj.prop + 99);
    }
}

userDetails<string>({ prop: "tahsin", age: 23 });
userDetails<number>({ prop: 12, age: 23 });

// generic class
class BottleMaker<T> {
    constructor(public key: T) {}
}

let b1 = new BottleMaker<string>('Pepsi');
let b2 = new BottleMaker<number>(12);

console.log(b1, b2);

// corner case
function func<T>(a: T, b: T): T {
    // return 'bolo' as T;
    return <T>'bolo';
}

func<string>('hi', 'hello');