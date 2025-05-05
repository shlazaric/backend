require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware 
app.use(cors());
app.use(express.json());

// ✅ MongoDB povezivanje
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Spojeno na MongoDB'))
    .catch((err) => console.error('❌ Greška pri spajanju:', err.message));

// ✅ Rute
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// ✅ Osnovna ruta
app.get('/', (req, res) => {
    res.send('🚀 Backend je aktivan');
});

// ✅ Pokretanje servera
app.listen(PORT, () => {
    console.log(`🚀 Server pokrenut na http://localhost:${PORT}`);
});
