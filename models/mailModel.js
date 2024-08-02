const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailSchema = new Schema({
    dateTime: { type: Date, required: true },
    freqType: { type: String, required: true },
    freqDay: { type: Number },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    attachments: [String],
    cronJobId: { type: Schema.Types.ObjectId, ref: "cronJob" }
});

const mailModel = new mongoose.model("Mail", mailSchema);
module.exports = mailModel;