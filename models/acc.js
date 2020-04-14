const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hero = new Schema(
  {
    name: { type: String, required: true },
    speciality: { type: Schema.Types.ObjectId, ref: 'speciality_id' , required: true },
    race: { type: String, required: true },
    hp: { type: Number, required: true },
    atk: { type: Number, required: true },
    weapon: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('heroes', Hero)