

module.exports = { 
    getAbout : async(req,res) => {
        try {
            res.render('about.ejs')

        } catch(err) {
            if(err) return res.status(500).send(err)
            console.log(err)
        }
    }
}