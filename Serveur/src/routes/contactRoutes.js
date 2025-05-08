const express = require('express');
const routerD = express.Router();
const Devis = require('../models/contactModel.js');

routerD.get('/', async (req, res) => {
    try {
        const getAllDevis = await Devis.find();
        res.status(200).json(getAllDevis);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des devis', error: error.message });
    }
});

routerD.post('/', async (req, res) => {
    try {
        const {
            fullname = "",
            email = "",
            phone = "",
            eventDate,
            eventType,
            participants,
            budget,
            services,
            serviceSuggestion = "",
            message = ""
        } = req.body;

        if (!fullname || !email || !phone || !eventDate || !eventType || !participants || !services) {
            return res.status(400).json({ message: "Certains champs obligatoires sont manquants." });
        }

        const newDevis = new Devis({
            fullname,
            email,
            phone,
            eventDate,
            eventType,
            participants,
            budget,
            services,
            serviceSuggestion,
            message
        });

        const savedDevis = await newDevis.save();
        res.status(201).json(savedDevis);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du devis', error: error.message });
    }
});

routerD.put('/:id', async (req, res) => {
    try {
        const updatedDevis = await Devis.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDevis) {
            return res.status(404).json({ message: 'Devis non trouvé !' });
        }
        res.status(200).json({ message: 'Devis mis à jour avec succès !', updatedDevis });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du devis', error: error.message });
    }
});

routerD.delete('/:id', async (req, res) => {
    try {
        const deletedDevis = await Devis.findByIdAndDelete(req.params.id);
        if (!deletedDevis) {
            return res.status(404).json({ message: 'Devis non trouvé !' });
        }
        res.status(200).json({ message: 'Devis supprimé avec succès !', deletedDevis });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du devis', error: error.message });
    }
});

module.exports = routerD;
