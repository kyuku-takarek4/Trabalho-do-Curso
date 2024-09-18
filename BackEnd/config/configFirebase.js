var admin = require("firebase-admin");

var serviceAccount = require("../secrets/programinhos-programantes-firebase-adminsdk-aprh8-172ea43215.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
