const userModel = require("../Models/user")
const urlModel = require("../Models/url")
const shortid = require("shortid");

const createURL = async (url,id,username) => {
    const shortID = shortid()
    let user ;
    user = await userModel.findOne({DiscordId:id,Username:username}) 
    if (!user) {
        user = await userModel.create({
            DiscordId:id,
            Username:username
        })
    }
    try {
        await urlModel.create({
            ShortID:shortID,
            RedirectURL:url,
            working:true,
            count:0,
            createdBy:user._id
        })
    } catch (error) {
        return("Error in Creating Short Url")
    }
    return shortID

}

module.exports = createURL