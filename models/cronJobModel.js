const mongoose = require("mongoose");

const cronJobSchema = new mongoose.Schema({
    mailModelDetails: {
        //to mention the date and time on which mail has to be sent
        dateTime: {
            type: Date,
            required: true
        },
        //to keep track of how frequently the mail has to be sent
        freqType: {
            type: String,
            required: true
        },
        //to keep day on which mail is to be sent when it comes to monthly, weekly or yearly schedules
        freqDay: {
            type: Number,
        },
        subject: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        attachments: [String]
    }
});

const cronJob = new mongoose.Schema('cronJobModel', cronJobSchema);
module.exports = cronJob;