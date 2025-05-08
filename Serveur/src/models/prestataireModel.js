const mongoose = require('mongoose');

const prestataireSchema = new mongoose.Schema({
  username: { type: String, default: "", unique: true },
  firstname: { type: String, default: "" },
  email: { type: String, default: "", unique: true },
  tel: { type: String, default: "" },
  serviceType: {
    type: String,
    enum: ['Couture', 'Coiffure', 'Styliste-Modéliste', 'Couture générale', 'Photographe', 'autre'], 
    required: true
  },
  message: { type: String, default: "" },
  numberOfParticipants: { type: Number, default: 1 },
  budget: { type: Number, default: 0 }, 
  serviceMessage: { type: String, default: "" } 
});

const taire = mongoose.model('Prest', prestataireSchema);
module.exports = taire;
