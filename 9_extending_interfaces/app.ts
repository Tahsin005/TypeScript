interface User {
    name: string;
    email: string;
    password: string;
}

interface Admin extends User {
    admin: boolean;
}

function abcd (obj: Admin) {

}

// interface merges
interface Abcd{
    name: string;
}

interface Abcd {
    email: string;
}

function mergeTesting(obj: Abcd) {
    
}