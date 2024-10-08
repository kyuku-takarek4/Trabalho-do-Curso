var admin = require("firebase-admin");

var serviceAccount = require("../../secrets/banco-de-bagos-firebase-adminsdk-ao45g-6bbf43d49e.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
const db = admin.firestore();
module.exports = db;
