const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./dbConfig/dbConfig');
const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = require(`./${process.env.FIREBASE_ADMIN_PATH}`);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.BUCKET_URL
})

connect();

app.use(express.json());
app.use(cors());

app.use("/api/mail", require("./routes/mail"));

app.get("/", async(req, res) => {
    try {
        return res.status(200).json({message: "Test!"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

app.listen(3000, () => {
    console.log("Listening on PORT 3000!");
});