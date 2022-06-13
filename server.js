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
    },
    'high-priestess': {
        'name': 'The High Priestess',
        'number': 2,
        'arcana': 'Major'
    },
    'empress': {
        'name': 'The Empress',
        'number': 3,
        'arcana': 'Major'
    },
    'emperor': {
        'name': 'The Emperor',
        'number': 4,
        'arcana': 'Major'
    },
    'hierophant': {
        'name': 'The Hierophant',
        'number': 5,
        'arcana': 'Major'
    }, 
    'lovers': {
        'name': 'The Lovers',
        'number': 6,
        'arcana': 'Major'
    },
    'chariot': {
        'name': 'The Chariot',
        'number': 7,
        'arcana': 'Major'
    },
    'strength': {
        'name': 'Strength',
        'number': 8,
        'arcana': 'Major'
    },
    'hermit': {
        'name': 'The Hermet',
        'number': 9,
        'arcana': 'Major'
    },
    'wheel-of-fortune': {
        'name': 'The Wheel of Fortune',
        'number': 10,
        'arcana': 'Major'
    },
    'justice' : {
        'name': 'Justice',
        'number': 11,
        'arcana': 'Major'
    },
    'hanged-man': {
        'name': 'The Hanged Man',
        'number': 12,
        'arcana': 'Major'
    }, 
    'death': {
        'name': 'Death',
        'number': 13,
        'arcana': 'Major'
    },
    'temperance': {
        'name': 'Temperance',
        'number': 14,
        'arcana': 'Major'
    },
    'devil': {
        'name': 'The Devil',
        'number': 15,
        'arcana': 'Major'
    },
    'tower': {
        'name': 'The Tower',
        'number': 16,
        'arcana': 'Major'
    },
    'star': {
        'name': 'The Star',
        'number': 17,
        'arcana': 'Major'
    },
    'moon': {
        'name': 'The Moon',
        'number': 18,
        'arcana': 'Major'
    },
    'sun': {
        'name': 'The Sun',
        'number': 19,
        'arcana': 'Major'
    },
    'judgement': {
        'name': 'Judgement',
        'number': 20,
        'arcana': 'Major'
    },
    'world': {
        'name': 'The World',
        'number': 21,
        'arcana': 'Major'
    },
    'ace-wands': {
        'name': 'Ace of Wands',
        'number': 1,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'two-wands': {
        'name': 'Two of Wands',
        'number': 2,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'three-wands': {
        'name': 'Three of Wands',
        'number': 3,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'four-wands': {
        'name': 'Four of Wands',
        'number': 4,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'five-wands': {
        'name': 'Five of Wands',
        'number': 5,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'six-wands': {
        'name': 'Six of Wands',
        'number': 6,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'seven-wands': {
        'name': 'Seven of Wands',
        'number': 7,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'eight-wands': {
        'name': 'Eight of Wands',
        'number': 8,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'nine-wands': {
        'name': 'Nine of Wands',
        'number': 9,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'ten-wands': {
        'name': 'Ten of Wands',
        'number': 10,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'page-wands': {
        'name': 'Page of Wands',
        'number': 11,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'knight-wands': {
        'name': 'Knight of Wands',
        'number': 12,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'queen-wands': {
        'name': 'Queen of Wands',
        'number': 13,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    }, 
    'king-wands': {
        'name': 'King of Wands',
        'number': 14,
        'arcana': 'Minor',
        'element': 'Fire',
        'signs': 'Aries, Leo, Saggittarius'
    },
    'ace-pentacles': {
        'name': 'Ace of Pentacles',
        'number': 1,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    }, 
    'two-pentacles': {
        'name': 'Two of Pentacles',
        'number': 2,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'three-pentacles': {
        'name': 'Three of Pentacles',
        'number': 3,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'four-pentacles': {
        'name': 'Four of Pentacles',
        'number': 4,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'five-pentacles': {
        'name': 'Five of Pentacles',
        'number': 5,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'six-pentacles': {
        'name': 'Six of Pentacles',
        'number': 6,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'seven-pentacles': {
        'name': 'Seven of Pentacles',
        'number': 7,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'eight-pentacles': {
        'name': 'Eight of Pentacles',
        'number': 8,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    }, 
    'nine-pentacles': {
        'name': 'Nine of Pentacles',
        'number': 9,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'ten-pentacles': {
        'name': 'Ten of Pentacles',
        'number': 10,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'page-pentacles': {
        'name': 'Page of Pentacles',
        'number': 11,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'knight-pentacles': {
        'name': 'Knight of Pentacles',
        'number': 12,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    }, 
    'queen-pentacles': {
        'name': 'Queen of Pentacles',
        'number': 13,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    }, 
    'king-pentacles': {
        'name': 'King of Pentacles',
        'number': 14,
        'arcana': 'Minor',
        'element': 'Earth',
        'signs': 'Taurus, Virgo, Capricorn'
    },
    'ace-swords': {
        'name': 'Ace of Swords',
        'number': 1,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'two-swords': {
        'name': 'Two of Swords',
        'number': 2,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    }, 
    'three-swords': {
        'name': 'Three of Swords',
        'number': 3,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'four-swords':{ 
        'name': 'Four of Swords',
        'number': 4,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'five-swords': {
        'name': 'Five of Swords',
        'number': 5,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'six-swords': {
        'name': 'Six of Swords',
        'number': 6,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    }, 
    'seven-swords': {
        'name': 'Seven of Swords',
        'number': 7,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'eight-swords': {
        'name': 'Eight of Swords',
        'number': 8,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    }, 
    'nine-swords': {
        'name': 'Nine of Swords',
        'number': 9,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'ten-swords': {
        'name': 'Ten of Swords',
        'number': 10,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'page-swords': {
        'name': 'Page of Swords',
        'number': 11,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'knight-swords': {
        'name': 'Knight of Swords',
        'number': 12,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'queen-swords': {
        'name': 'Queen of Swords',
        'number': 13,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'king-swords': {
        'name': 'King of Swords',
        'number': 14,
        'arcana': 'Minor',
        'element': 'Air',
        'signs': 'Gemini, Libra, Aquarius'
    },
    'ace-cups': {
        'name': 'Ace of Cups',
        'number': 1,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'two-cups': {
        'name': 'Two of Cups',
        'number': 2,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'three-cups': {
        'name': 'Three of Cups',
        'number': 3,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'four-cups': {
        'name': 'Four of Cups',
        'number': 4,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'five-cups': {
        'name': 'Five of Cups',
        'number': 5,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'six-cups': {
        'name': 'Six of Cups',
        'number': 6,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'seven-cups': {
        'name': 'Seven of Cups',
        'number': 7,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'eight-cups': {
        'name': 'Eight of Cups',
        'number': 8,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    }, 
    'nine-cups': {
        'name': 'Nine of Cups',
        'number': 9,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'ten-cups': {
        'name': 'Ten of Cups',
        'number': 10,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'page-cups': {
        'name': 'Page of Cups',
        'number': 11,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'knight-cups': {
        'name': 'Knight of Cups',
        'number': 12,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'queen-cups': {
        'name': 'Queen of Cups',
        'number': 13,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    },
    'king-cups': {
        'name': 'King of Cups',
        'number': 14,
        'arcana': 'Minor',
        'element': 'Water',
        'signs': 'Cancer, Scorpio, Pisces'
    }


}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res)=>{
    res.json(cards)
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