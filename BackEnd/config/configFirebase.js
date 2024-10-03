var admin = require("firebase-admin");

var serviceAccount = require("../secrets/banco-de-bagos-firebase-adminsdk-ao45g-72977226b0.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
const db = admin.firestore();
module.exports = db;
