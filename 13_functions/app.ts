function abcd(): void {
  console.log('Hi');
}

function abcdef(name: string, age: number, cb: (arg: string) => void) {
  cb('hello')
}

abcdef('tahsin', 23, (arg: string) => {
  console.log(arg);
})

// optional parameters
function ghijkl(name: string, age?: number, gender: string = 'male or female r kichu hoile thabor dibo'): void {
  console.log(name, age, gender);
}

ghijkl('tahsin', 23, 'male')
ghijkl('lagbatak', 18);

// rest parameters
function mnopqrs(namlange: string, ...arr: number[]): void {
  console.log(name, arr);
}

mnopqrs('tahsin', 1, 2, 3, 4, 5);

// function overloading
function combine(input1: string, input2: string): string; // Concatenate strings
function combine(input1: number, input2: number): number; // Add numbers

function combine(input1: any, input2: any): any {
  return input1 + input2;
}

// Usage
const result1 = combine("Hello, ", "World!"); // "Hello, World!"
const result2 = combine(10, 20); // 30
// const result3 = combine("Hello, ", 10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
