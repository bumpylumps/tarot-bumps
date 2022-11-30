const Card = require('../models/Card');



module.exports = {
    getHome : async(req, res) => {
        try { 
            res.render('index.ejs')
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },

    getSinglePull: async(req,res) => {
        
        //randomizer function
        function random(){
            return Math.floor(Math.random() * 78)
        }


        try{
            Card.findOne({ id: random() }, (err, cards) => {
                res.json(cards)
              })
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

    

}

