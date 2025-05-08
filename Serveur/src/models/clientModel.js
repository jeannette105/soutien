const mongoose = require('mongoose');

const clieSchema = new mongoose.Schema({
  username: { type: String, default: "", unique: true },
  firstname: { type: String, default: "" },
  email: { type: String, default: "", unique: true },
  tel: { type: String, default: "" },
  city: { type: String, default: "" },
});

const Clie = mongoose.model('Clie', clieSchema);
module.exports = Clie;
