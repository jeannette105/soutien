const mongoose = require('mongoose');

const cliSchema = new mongoose.Schema({
  username: { type: String, default:""},
  Password: { type: String, default:"", },
  confirmPassword: { type: String, default:"", }
});

const Cli = mongoose.model('Client', cliSchema);
module.exports = Cli;

