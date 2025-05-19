const express = require('express');
const Pet = require('../models/pet');
const router = express.Router();

router.get('/', async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
});


router.post('/', async (req, res) => {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
});

module.exports = router;
