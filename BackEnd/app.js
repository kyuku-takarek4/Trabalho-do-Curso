const express = require('express');
const app = express();
const cors = require('cors')

// Configuração do Firebase
const admin = require('firebase-admin');
const serviceAccount = require('../secrets/banco-de-bagos-firebase-adminsdk-ao45g-72977226b0.json');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Importar rotas
const usuariosRoutes = require('./rotas/RotasUsuario');

// Usar rotas
app.use('/api', usuariosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));