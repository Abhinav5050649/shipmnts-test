const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async(req, res) => {
    try {
        return res.status(200).json({message: "Test!"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

app.listen(3000, ()=> {
    console.log("Listening on PORT 3000!");
});