const express = require("express");
const router = express.Router();
const mailModel = require("../models/mailModel");
const cronJob = require("../models/cronJobModel");
const uploadFiles = require("../helpers/upload");

require('dotenv').config();

router.get(`/scheduled-emails/:id`, async(req, res) => {
    try {
        const mailData = await mailModel.findById(req.params.id);
        
        return (mailData)   ?   res.status(200).send(mailData).json({message: "Scheduled Mail Found!"}) : res.status(404).json({message: "Scheduled Mail NOT Found!"});

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.get(`/scheduled-emails`, async(req, res) => {
    try {
        const mailsData = await mailModel.find();

        return res.status(200).send(mailsData).json({message: "All mails!"});

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.post(`/schedule-email`, async(req, res) => {
    try {
        const {receipient, dateTime, freqType, freqDay, subject, body} = req.body;
        const attachments = req.files;

        let links = [];
        if (attachments.length != 0)    links = uploadFiles(attachments);


        const newMail = await mailModel.create({
            receipient,
            dateTime,
            freqType,
            freqDay,
            subject,
            body    
        });


    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.delete(`/scheduled-emails/:id`, async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

module.exports = router;