const express = require('express')
const app = express()
const PORT = 8000

const cards = {
    'fool': {
        'name': 'The Fool',
        'number': 0,
        'arcana': 'Major'
    },
    'magician': {
        'name': 'The Magician',
        'number': 1,
        'arcana': 'Major'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const cardName = request.params.name.toLowerCase()
    if(cards[cardName]){
        response.json(cards[cardName])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}, I'm ALIVE!!!`)
})