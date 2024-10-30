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

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData(newName, newEmail) {
        this.name = newName;
        this.email = newEmail;
        console.log(`Data updated: Name - ${this.name}, Email - ${this.email}`);
    }
}


const admin1 = new Admin("Marshall", "marshallmathers@gmail.com");
admin1.editData("Eminem", "eminem@gmail.com");  
console.log(viewData(admin1));
