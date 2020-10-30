const { runInContext } = require('vm')
const db = require('../db/connection')
const Schema = require('../models/schema')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users =
        [
            {
                "firstName": "Lorem",
                "lastName": "Ipsum",
                "streetAddress": "1 Murray Street",
                "apartmentSuite": "#101",
                "city": "New York",
                "state": "New York",
                "zipCode": "10007",
                "dob": "01/01/1970",
                "email": "YahooHotmail@aol.com",
                "cell": "(123) 456-789"
            },
        ]
    await Schema.insertMany(users)
    console.log("Seeded dummy users!")
}

const run = async () => {
    await main()
    db.close()
}

run()