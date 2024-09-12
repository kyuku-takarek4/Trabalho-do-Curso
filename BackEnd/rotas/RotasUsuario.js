const express = require('express');
const router = express.Router();
const usuarioController = require('../controlador/ControladorUsuario');

// Rota para criar um novo usuario
router.post('/usuarios', usuarioController.createusuario);

// Rota para obter todos os usuarios
router.get('/usuarios', usuarioController.getAllusuarios);

// Rota para obter um usuario pelo ID
router.get('/usuarios/:id', usuarioController.getusuarioById);

// Rota para atualizar um usuario
router.put('/usuarios/:id', usuarioController.updateusuario);

// Rota para deletar um usuario
router.delete('/usuarios/:id', usuarioController.deleteusuario);

module.exports = router;