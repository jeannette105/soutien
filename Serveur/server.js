const express = require ("express")
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express(); 
const PORT = 500;


dotenv.config()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à la base de données :', err));

const contactRoutes = require('./src/routes/contactRoutes');
app.use('/api/devis', contactRoutes);

const cliRoutes = require('./src/routes/cliRoutes');
app.use('/api/client', cliRoutes);

const VueRoutes = require('./src/routes/presRoutes');
app.use('/api/prestataire', VueRoutes);

const taireRoutes = require('./src/routes/prestataireRoutes');
app.use('/api/prestataire/register', taireRoutes);

const clieRoutes = require('./src/routes/clientRoutes');
app.use('/api/clie/register', clieRoutes);


app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion plateform!');
});

app.listen(PORT, () => {
    console.log(`Mon serveur est actif sur l'adresse http://localhost:${PORT}`);
});
