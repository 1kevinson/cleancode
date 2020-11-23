class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    save() {
        db.insert('users',this)
    }
}

const user = new User("kk@gm.fr","regex101");
user.save();