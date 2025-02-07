// interface

interface User {
    name: string,
    email: string,
    password: string,
    gender?: string
}

function getDataOfUser(obj: User) {

}

getDataOfUser({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
})