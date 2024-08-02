require('dotenv').config();
const mongoose = require("mongoose");

function connect(){
    try {
        const connection = mongoose.connect(process.env.MONGO_URL);
        if (connection) console.log("Conected to DB!");
        else    console.log("Error connecting to DB!");
    } catch (error) {
        console.log("Error connecting to DB: ", error);
    }
}

module.exports = connect;