const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose');
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

//GET card-o-pedia
app.get('/card-o-pedia/', async (req, res) => {
    try{
        res.render('card-o-pedia.ejs')
    } catch (err) {
        if(err) return res.status(500).send(err)
        console.log(err)
    }
})


//Port listener
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}, I'm ALIVE!!!`)
})