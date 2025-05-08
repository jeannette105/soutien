const express = require('express');
const router = express.Router();
const Cli = require('../models/cliModel.js');

router.get('/', async (req, res) => {
  try {
    const getAllClient = await Cli.find();
    if (getAllClient.length === 0) {
      return res.status(200).json({ message: "Aucun client trouvé." });
    }
    res.status(200).json(getAllClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { username, Password, confirmPassword } = req.body;

  if (!username || !Password || !confirmPassword) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  if (Password !== confirmPassword) {
    return res.status(400).json({ message: "Les mots de passe ne correspondent pas." });
  }

  try {
    const savedCli = await new Cli({ username, Password, confirmPassword }).save();
    res.status(201).json(savedCli);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedClient = await Cli.findByIdAndDelete(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client non trouvé." });
    }
    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
