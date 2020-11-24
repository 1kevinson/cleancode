// BAD LEVEL
// saveUser should orchestrate only the steps that requires to saveUser
function saveUser(username, email) {
    if (email.includes('@')) {
        //then
    }
    // and then
}


// GOOD ONE
// only do what function describe -> Verifying email
function emailIsValid(email) {
    return email.includes('@');
}


/**
 * @DONT_MIX_LEVEL_OF_ABSTRACTION
 */

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

// BAD - we need to read, understand and interpret different steps :'(
function saveUserBad(username, email) {
    if (email.includes('@')) {
        console.log('invalid email')
    } else {
        const user = new User(username, email);
        user.save()
    }
}


// GOOD - we just read different steps :D
function saveUserGood(username, email) {
    if (!isEmail(email)) {
        showError('invalid email')
    } else {
        saveNewUser(username, email)
    }
}

// Level Of Abstractions
function isEmail(email) {
    return email.includes('@');
}

function showError(message) {
    console.log(message);
}

function saveNewUser(username, email) {
    const user = new User(username, email);
    user.save()
}