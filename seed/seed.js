const { runInContext } = require('vm')
const db = require('../db/connection')
const Schema = require('../models/schema')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const info =
        [
            {
                "firstName": "Lorem",
                "lastName": "Ipsum",
                "streetAddress": "1 Murray Street",
                "apartmentSuite": "#101",
                "city": "New York",
                "state": "New York",
                "zipCode": "10007",
                "day": "01",
                "month": "01",
                "year": "1970",
                "email": "YahooHotmail@aol.com",
                "cell": "(123) 456-789"
            },
        ]
    await Schema.insertMany(info)
    console.log("Seeded dummy info!")
}

const run = async () => {
    await main()
    db.close()
}

run()