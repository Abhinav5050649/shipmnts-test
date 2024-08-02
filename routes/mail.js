const express = require("express");
const router = express.Router();
const mailModel = require("../models/mailModel");
const cronJob = require("../models/cronJobModel");
const multer=require('multer')
const upload=multer({storage: multer.memoryStorage()})
var admin = require("firebase-admin");
router.locals.bucket = admin.storage().bucket;

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
        let {receipient, timeNumber, am_or_pm, freqType, freqDay, subject, body} = req.body;
        const attachments = req.files;

        let links = [];
        if (attachments.length != 0) 
        {
            for (var i = 0; i < attachments.length; i++)
            {
                const result = await router.locals.bucket.file(attachments[i].originalname).createWriteStream().end(attachments[i].buffer);
                console.log(result);
                links.push(result);
            }
        }

        let date = new Date(new Date().toISOString().slice(0, 10));
        let dateTime = new Date();

        if (am_or_pm == 'am')   
        {
            dateTime = date.setHours(date.getHours() + timeNumber);
        }
        else if (am_or_pm == 'pm')
        {
            dateTime = date.setHours(date.getHours() + 12 + timeNumber);
        }
        
        if (freqType == 'Daily')    freqDay = 365;

        const newMail = await mailModel.create({
            receipient,
            dateTime,
            freqType,
            freqDay,
            subject,
            body,
            attachments: links 
        });

        return res.status(201).json({message: "Mail Scheduled Successfully!"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

router.delete(`/scheduled-emails/:id`, async(req, res) => {
    try {
        const mailData = await mailModel.findById(req.params.id);
        if (mailData)
        {
            // if (mailData.attachments.length != 0)
            // {

            // }

            const mailDeletion = await mailModel.findByIdAndDelete(mailData._id);

            return res.status(200).json({message: "Scheduled Email deleted successfully!"});
        }
        else
        {
            return res.status(404).json({message: "Requested Scheduled Email Not Found!"});
        }

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!"});
    }
});

module.exports = router;