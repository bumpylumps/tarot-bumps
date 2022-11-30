const Card = require('../models/Card');


module.exports = { 
    getCardopedia: async(req,res) => {
        try{
            const cards = await Card.find({});

            res.render('card-o-pedia.ejs', { cards: cards })
        } catch (err) {
            if(err) return res.status(500).send(err)
            console.log(err)
        }
    },
    
    findCard: async(req,res) => {
        //SET UP CARD FINDER FUNCTION 
        try{

        }catch{

        }
    }
}