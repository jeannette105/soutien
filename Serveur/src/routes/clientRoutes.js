const express = require('express');
const router = express.Router();
const Client = require('../models/clientModel.js');

router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    if (clients.length === 0) {
      return res.status(200).json({ message: "Aucun client trouvé." });
    }
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { username, firstname, email, tel, city } = req.body;

  if (!username || !firstname || !email || !tel || !city) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  try {
    const newClient = new Client({ username, firstname, email, tel, city });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Le nom d'utilisateur ou l'email est déjà pris." });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.put('/:id', async (req, res) => {
  const { username, firstname, email, tel, city } = req.body;

  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      { username, firstname, email, tel, city },
      { new: true, runValidators: true }
    );

    if (!updatedClient) {
      return res.status(404).json({ message: "Client non trouvé." });
    }

    res.status(200).json({
      message: "Client mis à jour avec succès.",
      updatedClient
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client non trouvé." });
    }
    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
