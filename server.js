const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose');
const cards = require('./models/cards');
const Card = require('./models/cards')
require('dotenv').config()

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },   
).then(() => {console.log('Connected to db!');})
.catch(err => {
    console.log(
        "Error in DB connection : " + JSON.stringify(err, undefined, 2)
      );
})




//GET home 
app.get('/', async (req,res) => {
    try{
    res.render('index.ejs')
    } catch (err) {
        if(err) return res.status(500).send(err)
        console.log(err)
    }
})

//GET about page
app.get('/about/', async (req, res) => {
    try{
        res.render('about.ejs')
    } catch (err) {
        if(err) return res.status(500).send(err)
        console.log(err)
    }
})


//randomizer
function random(){
    return Math.floor(Math.random() * 78)
}

//GET card pull in index
app.get('/pull/single/', async (req, res) => {
    try{
      Card.findOne({ id: random()}, (err, cards) => {
        res.json(cards)
      })
     } catch(err) {
        if(err){ 
            console.log(err)
            return res.status(500).send(err)
        }
        }
})

//GET card-o-pedia
app.get('/card-o-pedia/', async (req, res) => {
    try{
        res.render('card-o-pedia.ejs')
    } catch (err) {
        if(err) return res.status(500).send(err)
        console.log(err)
    }
})

//GET card in card-o-pedia
app.get('/card-o-pedia/:name', async (request, response) => {
    const cardName = request.params.name
    try { 
        Card.findOne({ name: cardName }, (err, cards) => {
            res.json(cards)
        })
    } catch(err) {
        if(err){
            console.log(err)
            res.status(500).send(err)
        }
    }
})

//Port listener
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}, I'm ALIVE!!!`)
})