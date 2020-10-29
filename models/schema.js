const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)