const urlModel = require("../Models/url")

const deleteFunc = async (id) => {

    await urlModel.updateOne({ ShortID: id }, { working: false })
    return "Done"
}
module.exports = deleteFunc;