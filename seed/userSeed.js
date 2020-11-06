const { runInContext } = require('vm')
const db = require('../db/connection')
const Schema = require('../models/users')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const user = async () => {
    const account =
        [
            {
                "username": "lorenipsum123",
                "password": "1234"
            },
        ]
    await Schema.insertMany(account)
    console.log("Seeded dummy user!")
}

const run = async () => {
    await user()
    db.close()
}

run()