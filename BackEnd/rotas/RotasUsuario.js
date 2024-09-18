const express = require('express');
const router = express.Router();
const usuarioController = require('../controlador/ControladorUsuario');

// Rota para criar um novo usuario
router.post('/usuarios', usuarioController.createUsuario);

// Rota para obter todos os usuarios
router.get('/usuarios', usuarioController.getAllUsuarios);

// Rota para obter um usuario pelo ID
router.get('/usuarios/:id', usuarioController.getUsuarioById);

// Rota para atualizar um usuario
router.put('/usuarios/:id', usuarioController.updateUsuario);

// Rota para deletar um usuarioll
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

module.exports = router;