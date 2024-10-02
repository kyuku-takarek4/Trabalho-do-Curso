var admin = require("firebase-admin");

var serviceAccount = require("./secrets/programinhos-programantes-firebase-adminsdk-aprh8-b94e5c3b3c.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
const db = admin.firestore();
module.exports = db;
