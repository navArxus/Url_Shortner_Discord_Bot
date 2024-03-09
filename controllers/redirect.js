const urlModel = require("../Models/url")

const handleRedirect = async (req,res) => {
    const  id = req.params.id;
    // console.log(id);
    const idObject = await urlModel.findOneAndUpdate({ShortID:id},{ $inc: { count: 1 } },{new:true})
    // console.log(idObject);
    if (idObject.working === true) {
        res.redirect(idObject.RedirectURL)
    }else {
        res.send("<h1>Page Short Url is Disabled</h1>")
    }

}

module.exports = handleRedirect