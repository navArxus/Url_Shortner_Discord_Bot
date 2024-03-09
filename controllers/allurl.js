const urlModel = require("../Models/url")
const userModel = require("../Models/user")


const allurl = async (id, username) => {
    const user = await userModel.findOne({ DiscordId: id, Username: username });
    if (!user) {
        return ("No url Found")
    } else {
        const urls = await urlModel.find({ createdBy: user._id });
        const urlarray = urls.map(e => {
            return `http://localhost:8001/${e.ShortID} for ${e.RedirectURL} \n`
        })
        return urlarray.toString().replace(",","");
    }
}

module.exports = allurl