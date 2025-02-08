// type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length; // using 'as' syntax

let strLength2: number = (<string>someValue).length; // using angle-bracket syntax

// type casting
let a = Number("12");
console.log(typeof a);


// non null assertions operator
let b: string | null = "this is a string";
let strLength3: number = (b! as string).length; // using '!' syntax

let strLength4: number = b!.length; // using non-null assertion operator