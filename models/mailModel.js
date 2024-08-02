const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    freqType: {
        type: String,
        required: true
    },
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
    attachments: [String],
    cronJobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cronJob',
    }
});

const mailModel = new mongoose.Schema("mailModel", mailSchema);
module.exports = mailModel;