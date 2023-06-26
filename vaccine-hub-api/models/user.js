const  { UnauthorizedError } = require("../utils/erros")

class User {
    static async login(credentials){
        //user submits email and password
        //if any of these fields are missing, throw an error
        //
        //lookup the user in the db by email
        // if a user is found, compare the submitted password
        //with the password in the db
        // if there is a match, return the user
        //
        //if any of this goes wrong, throw an unauthorized error
        throw new UnauthorizedError("Invalid email/password combo")
    }


    static async reguster(credentials) {
        //user should submit email, password, rsvp status, and # of guests
        // if any of thes fields are missing, throw an error
        //
        //take the users password, and hash it
        //takes the users email, and lowercase it
        //
        //create a new user in the db with all their info
        // return the user
    }
}

module.exports = User