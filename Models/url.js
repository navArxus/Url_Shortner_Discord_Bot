const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    ShortID: { type: String, required: true },
    RedirectURL: { type: String, required: true },
    CreatedOn: { type: Date, default: Date.now() },
    working: { type: Boolean, required: true },
    count: Number,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
const url = mongoose.model("url", urlSchema)
module.exports = url