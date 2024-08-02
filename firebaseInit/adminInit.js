var admin = require("firebase-admin");
require('dotenv').config();

var serviceAccount = require(`../${process.env.FIREBASE_ADMIN_PATH}`);

const adminInit = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

export default adminInit;