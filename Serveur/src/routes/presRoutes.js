const express = require('express');
const router = express.Router();
const Pres = require('../models/presModel.js');

router.get('/', async (req, res) => {
  try {
    const pres = await Pres.find();
    if (pres.length === 0) {
      return res.status(200).json({ message: "Aucun pres trouvé." });
    }
    res.status(200).json(pres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { username, speciality, password, confirmPassword } = req.body;

  if (!username || !speciality || !password || !confirmPassword) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Les mots de passe ne correspondent pas." });
  }

  try {
    const newPres = new Pres({ username, speciality, password, confirmPassword });
    const savedPres = await newPres.save();
    res.status(201).json(savedPres);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Le nom d'utilisateur est déjà pris." });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { username, speciality, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Les mots de passe ne correspondent pas." });
    }

    const updatedPres = await Pres.findByIdAndUpdate(
      req.params.id,
      { username, speciality, password, confirmPassword },
      { new: true, runValidators: true }
    );

    if (!updatedPres) {
      return res.status(404).json({ message: "Pres non trouvé." });
    }

    res.status(200).json({
      message: "Pres mis à jour avec succès.",
      updatedPres
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Le nom d'utilisateur est déjà pris." });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPres = await Pres.findByIdAndDelete(req.params.id);
    if (!deletedPres) {
      return res.status(404).json({ message: "Pres non trouvé." });
    }
    res.status(200).json(deletedPres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
