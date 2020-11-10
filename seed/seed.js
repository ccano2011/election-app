const { runInContext } = require('vm')
const db = require('../db/connection')
const Schema = require('../models/schema')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const info =
        [

            {
                "firstName": "Beyonce",
                "lastName": "Knowles-Carter",
                "streetAddress": "195 Hudson Street",
                "apartmentSuite": "#39",
                "city": "New York",
                "county": "Manhattan",
                "zipCode": "10013",
                "day": "04",
                "month": "09",
                "year": "1981",
                "email": "queenb@gmail.com",
                "cell": "(123) 456-789"
            },
            {
                "firstName": "Taylor",
                "lastName": "Swift",
                "streetAddress": "155 Franklin Street",
                "apartmentSuite": "#123",
                "city": "New York",
                "county": "Manhattan",
                "zipCode": "10007",
                "day": "13",
                "month": "12",
                "year": "1989",
                "email": "youbelongwithme@aol.com",
                "cell": "(123) 456-789"
            },
            {
                "firstName": "Robyn",
                "lastName": "Fenty",
                "streetAddress": "125 Lafayette Street",
                "apartmentSuite": "#4A",
                "city": "New York",
                "county": "Manhattan",
                "zipCode": "10013",
                "day": "02",
                "month": "20",
                "year": "1988",
                "email": "riri@gmail.com",
                "cell": "(123) 456-789"
            }
        ]
    await Schema.insertMany(info)
    console.log("Seeded dummy info!")
}

const run = async () => {
    await main()
    db.close()
}

run()