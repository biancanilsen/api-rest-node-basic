var express = require('express');
var app = express();
const port = 3502

app.use(express.json());
app.listen(3502);

console.log('listening on port')

let db = [
    { id: 1, name: 'Daenerys Targaryen', family: 'House Targaryen', actorBirth: '23/10/1986', morreu: true },
    { id: 2, name: 'Sansa Stark', family: 'House Stark', actorBirth: '21/02/1996', morreu: false },
]

// Create (POST)
app.post('/new', (req, res) => {
    const body = req.body
    if (!body)
        return res.status(400).end();

    db.push(body);
    return res.json(body)
})


// Read (GET)
app.get('/', (req, res) => {
    return res.json(db)

})

// Update (PUT)
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body

    db.push(body);
    
})

// // Delete (DELETE)
app.delete('/:id', (req, res) => {
    const id = req.params.id;

    let newDb = db.filter(item => {
        if (!item[id])
            return item
    })

    db = newDb

    return res.send(newDb)
})
