const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Specialty = new Schema(
  {
    name: { type: String, required: true },
    skills: new Schema({
      a: { type: String, required: true },
      b: { type: String, required: true },
      c: { type: String, required: true },
      ult: { type: String, required: true }
})    },
  { timestamps: true }
)

module.exports = mongoose.model('specialties', Specialty)