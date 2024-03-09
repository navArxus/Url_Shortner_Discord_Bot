const urlModel = require('../Models/url')

const analytics = async (id) => {
    const data = await urlModel.findOne({ ShortID: id })
    console.log(id , data)
    if (data) {
        return data.count
    }
    else {
        return 0
    }
}
module.exports = analytics