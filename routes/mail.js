const express = require("express");
const router = express.Router();

router.get(`/scheduled-emails/${id}`, async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.get(`/scheduled-emails`, async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.post(`/schedule-email`, async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.delete(`/scheduled-emails/${id}`, async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

module.exports = router;