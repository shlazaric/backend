router.post('/', async (req, res) => {
    const { date, time, userId } = req.body;

    if (!date || !time || !userId) {
        return res.status(400).json({ message: 'Sva polja su obavezna (datum, vrijeme, korisnik).' });
    }

    try {
        const newAppointment = new Appointment({ date, time, user: userId });
        await newAppointment.save();
        res.status(201).json({ message: 'Termin spremljen!', appointment: newAppointment });
    } catch (error) {
        console.error('Greška:', error.message);
        res.status(500).json({ message: 'Greška na serveru.' });
    }
});
