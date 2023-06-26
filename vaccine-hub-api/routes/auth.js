const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        //take user email and password and attempt to authenticate them
    } catch (err){
        next(err)
    }
})

router.post("/register", async (req, res, next) =>{
    try {
        //take the users email, password, rsvp status, and the number of guests
        //and creates a new user in our database
    } catch (err) {
        next(err)
    }
})

module.exports = router