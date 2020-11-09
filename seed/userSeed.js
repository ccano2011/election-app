const { runInContext } = require('vm')
const db = require('../db/connection')
const Schema = require('../models/users')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const user = async () => {
    const account =
        [
            {
                "username": "lorenipsum123",
                "password": "1234",
                "firstName": "Lorem",
                "lastName": "Ipsum",
                "streetAddress": "1 Murray Street",
                "apartmentSuite": "#101",
                "city": "New York",
                "county": "New York County",
                "zipCode": "10007",
                "day": "01",
                "month": "01",
                "year": "1970",
                "email": "YahooHotmail@aol.com",
                "cell": "(123) 456-789"
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