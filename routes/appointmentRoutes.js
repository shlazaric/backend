const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');



router.post('/', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        const saved = await newAppointment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: 'Greška prilikom spremanja termina.' });
    }
});


router.get('/', async (req, res) => {
    try {
        const all = await Appointment.find();
        res.json(all);
    } catch (err) {
        res.status(500).json({ error: 'Greška prilikom dohvaćanja termina.' });
    }
});

module.exports = router;
