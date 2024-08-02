const mongoose = require("mongoose");

export default function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL, () => {
            console.log("Connected to DB!");
        });
    } catch (error) {
        console.log("Error connecting to DB: ", error);
    }
}