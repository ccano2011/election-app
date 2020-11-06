const { runInContext } = require('vm')
const db = require('../db/connection')
const Schema = require('../models/schema')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const user = async () => {
    const account =
        [
            {
                "userName": "lorenipsum123",
                "password": "1234"
            },
        ]
    await Schema.insertMany(account)
    console.log("Seeded dummy info!")
}

const run = async () => {
    await user()
    db.close()
}

run()