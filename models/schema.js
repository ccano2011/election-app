const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const Ballot = new Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     address: { type: String, required: true },
//     usPresident: { 
//       type: String, 
//       //ENUM suggestion from StackOverflow: https://stackoverflow.com/questions/61768692/how-to-set-mongoose-schema-for-select-option-list-and-set-property-on-selected-o
//       enum: ['Donald Trump, Mike Pence (R)', 'Joe Biden, Kamala Harris (D)', 'Howie Hawkins, Angela Nicole Walker (G)', 'Brock Pierce, Karla Ballard (I)', 'Jo Jorgensen, Spike Cohen (L)'],
//       required: true 
//     },
//     usCongress: {
//       type: String,
//       enum: ['Jerrold Nadler (D)', 'Cathey Bernstein (R)', 'Micheal Madrid (L)'],
//       required: true 
//     },
//     usSenate: {
//       type: String,
//       enum: ['Brad Hoylman (D)'],
//       required: true
//     },
//   },
//   { timestamps: true }
// )

// const BallotStatus = new Schema(
//   {
//     title: {
//       type: String,
//       required: true
//     },
//     description: {
//       type: String,
//       required: true
//     },
//     time: {
//       type: String, //mongooseTypes
//       required: true
//     }
//   }
// )

// module.exports = mongoose.model('BallotStatus', BallotStatus)

const RequestBallot = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    apartmentSuite: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: false },
    cell: { type: String, required: false }
  }
)

module.exports = mongoose.model('RequestBallot', RequestBallot)