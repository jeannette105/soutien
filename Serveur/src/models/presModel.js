const mongoose = require('mongoose');

const PresSchema = new mongoose.Schema({
  username: { type: String, default: "", unique: true },
  speciality: { type: String, default: "" },
  password: { type: String, default: "" },
  confirmPassword: { type: String, default: "" }
});

const Pres = mongoose.model('Prestataire', PresSchema);

module.exports = Pres;
