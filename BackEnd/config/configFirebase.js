const admin = require('firebase-admin');
const serviceAccount = require('../secrets/programa-dos-programinhos-firebase-adminsdk-22xg4-3d1679abf2.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
