//deps
const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
require('dotenv').config()


//required routes
const mainRoutes = require('./routes/main');
const cardopediaRoutes = require('./routes/cardopedia');
const aboutRoutes = require('./routes/about');

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION || PORT,
    { useNewUrlParser: true },   
).then(() => {console.log('Connected to db!');})
.catch(err => {
    console.log(
        "Error in DB connection : " + JSON.stringify(err, undefined, 2)
      );
})


//server listeners
app.use('/', mainRoutes);
app.use('/cardopedia', cardopediaRoutes);
app.use('/about', aboutRoutes);



//Port listener
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}, I'm ALIVE!!!`)
})