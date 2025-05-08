const mongoose = require('mongoose');

const DevisSchema = new mongoose.Schema({
  fullname: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
    enum: [
      "soiree", "retrouvaille", "seminaire", "reunion",
      "lancement", "promotion", "mariage", "anniversaire",
      "bapteme", "sortie", "soiree", "select"
    ]
  },
  participants: {
    type: Number,
    min: 1,
    required: true,
  },
  budget: {
    type: Number,
    min: 0,
  },
  services: {
    type: [String],
    enum: ["couture", "coiffure", "hotellerie", "restauration", "photo"],
    required: true
  },
  serviceSuggestion: {
    type: String,
    default: "",
  },
  message: {
    type: String,
  }
});

module.exports = mongoose.model('Devis', DevisSchema);
