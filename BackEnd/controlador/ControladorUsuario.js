const db = require('../config/configFirebase');

const UsuarioController = {
    createUsuario: async (req, res) => {
        try {
            console.log(db);
            const UsuarioRef = db.collection('Usuarios').doc();
            await UsuarioRef.set(req.body);
            res.status(201).json({ id: UsuarioRef.id, ...req.body });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllUsuarios: async (req, res) => {
        try {
            const UsuariosSnapshot = await db.collection('Usuarios').get();
            const Usuarios = [];
            UsuariosSnapshot.forEach(doc => {
                Usuarios.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(Usuarios);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getUsuarioById: async (req, res) => {
        try {
            const UsuarioRef = db.collection('Usuarios').doc(req.params.id);
            const doc = await UsuarioRef.get();
            if (!doc.exists) {
                res.status(404).send('Usuario não encontrado');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateUsuario: async (req, res) => {
        try {
            const UsuarioRef = db.collection('Usuarios').doc(req.params.id);
            await UsuarioRef.update(req.body);
            res.status(200).send('Usuario atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteUsuario: async (req, res) => {
        try {
            const UsuarioRef = db.collection('Usuarios').doc(req.params.id);
            await UsuarioRef.delete();
            res.status(200).send('Usuario deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = UsuarioController;