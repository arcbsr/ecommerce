const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true
  },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });


const User = mongoose.model('User', userchema);
module.exports = User;