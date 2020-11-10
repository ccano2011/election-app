const { runInContext } = require("vm");
const db = require("../db/connection");
const Schema = require("../models/users");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const user = async () => {

  const account = [
    {
      username: "ccano2011",
      password: "12345678",
      firstName: "Chris",
      lastName: "Cano",
      streetAddress: "1 Murray Street",
      apartmentSuite: "#101",
      city: "New York",
      county: "New York County",
      zipCode: "10007",
      day: "01",
      month: "01",
      year: "1970",
      email: "YahooHotmail@aol.com",
      cell: "(123) 456-789",
    },
    {
      username: "bw-dani",
      password: "1234",
      firstName: "Danielle",
      lastName: "Broadwater",
      streetAddress: "220 Central Park S",
      apartmentSuite: "#220",
      city: "New York",
      county: "New York County",
      zipCode: "10007",
      day: "29",
      month: "04",
      year: "1995",
      email: "YahooHotmail@aol.com",
      cell: "(123) 456-789",
    },
    {
      username: "CyberDragonWizard",
      password: "1234",
      firstName: "Brian",
      lastName: "Nester",
      streetAddress: "1 Hackerman Street",
      apartmentSuite: "#101",
      city: "New York",
      county: "New York County",
      zipCode: "10007",
      day: "12",
      month: "06",
      year: "1992",
      email: "YahooHotmail@aol.com",
      cell: "(123) 456-789",
    },
    {
      username: "annie1289",
      password: "1234",
      firstName: "Annie",
      lastName: "Wang",
      streetAddress: "768 5th Ave",
      apartmentSuite: "#101",
      city: "New York",
      county: "New York County",
      zipCode: "10019",
      day: "12",
      month: "06",
      year: "1992",
      email: "YahooHotmail@aol.com",
      cell: "(123) 456-789",
    },
  ];
  await Schema.insertMany(account);
  console.log("Seeded dummy user!");
};

const run = async () => {
  await user();
  db.close();
};

run();
