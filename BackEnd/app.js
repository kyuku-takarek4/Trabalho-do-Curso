const express = require('express');
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');
const serviceAccount = require('./secrets/programinhos-programantes-firebase-adminsdk-aprh8-172ea43215.json');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const usuariosRoutes = require('./rotas/RotasUsuario');

// Usar rotas
app.use('/api', usuariosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));