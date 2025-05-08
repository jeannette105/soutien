const express = require('express');
const router = express.Router();
const Prestataire = require('../models/prestataireModel.js');

router.get('/', async (req, res) => {
  try {
    const prestataires = await Prestataire.find();
    if (prestataires.length === 0) {
      return res.status(200).json({ message: "Aucun prestataire trouvé." });
    }
    res.status(200).json(prestataires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const {
    username = "",
    firstname = "",
    email = "",
    tel = "",
    serviceType,
    message = "",
    numberOfParticipants = 1,
    budget = 0,
    serviceMessage = ""
  } = req.body;

  if (!username || !email || !serviceType) {
    return res.status(400).json({ message: "Les champs obligatoires sont manquants : username, email, serviceType." });
  }

  try {
    const newPrestataire = new Prestataire({
      username,
      firstname,
      email,
      tel,
      serviceType,
      message,
      numberOfParticipants,
      budget,
      serviceMessage
    });

    const savedPrestataire = await newPrestataire.save();
    res.status(201).json(savedPrestataire);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Un utilisateur avec cet email ou username existe déjà." });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedPrestataire = await Prestataire.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPrestataire) {
      return res.status(404).json({ message: "Prestataire non trouvé." });
    }

    res.status(200).json({
      message: "Prestataire mis à jour avec succès.",
      updatedPrestataire
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email ou username déjà utilisé." });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPrestataire = await Prestataire.findByIdAndDelete(req.params.id);
    if (!deletedPrestataire) {
      return res.status(404).json({ message: "Prestataire non trouvé." });
    }
    res.status(200).json(deletedPrestataire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
