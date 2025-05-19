const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Spojeno na MongoDB'))
    .catch((err) => console.error('❌ Greška pri spajanju:', err));

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`🚀 Server pokrenut na http://localhost:${PORT}`);
});
