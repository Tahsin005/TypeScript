// union
let a: string | null;

// intersection
type User = {
    name: string,
    email: string
}

type Admin = User & {
    getDetails(user: string): void
}

function abcd(a: Admin) {
    a.getDetails('Hasan')
}

/*
    Cannot do this

type abcd = number;
type abcd = number;


*/