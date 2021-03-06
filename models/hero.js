const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hero = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' , required: true },
    name: { type: String, required: true },
    specialty: { type: Schema.Types.ObjectId, ref: 'specialty_id' , required: true },
    race: { type: String, required: true },
    hp: { type: Number, required: true },
    atk: { type: Number, required: true },
    weapon: { type: String, required: true },
    img: { type: String, required: true },
    spec: {type: String},
    description: {type: String}
  },
  { timestamps: true }
)

module.exports = mongoose.model('heroes', Hero)