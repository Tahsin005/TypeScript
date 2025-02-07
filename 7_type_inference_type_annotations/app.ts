let a = 12; // type inference - automatically type set

let b: string = "tahsin"; // type annotation - explicitly mentioned type

let c: boolean = true; // type annotation - explicitly mentioned type

function abcd(a: number, b: string): void {
    console.log(a, b);
}

abcd(12, "tahsin");