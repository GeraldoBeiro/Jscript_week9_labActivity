class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const user1 = new User("Marshall", "marshallmathers@gmail.com");

function viewData(user) {
    return `User name is ${user.name}, and email: ${user.email}`;
}

console.log(viewData(user1));
