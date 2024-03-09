const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    DiscordId: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
    }
})
const user = mongoose.model('user', userSchema)
module.exports = user;