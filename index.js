var express = require('express');
var app = express();
const port = 3509

app.use(express.json());
app.listen(3509);

let db = [
    { id: 1, name:'Daenerys Targaryen', family: 'House Targaryen', actorBirth: '23/10/1986', morreu: true  },
    { id: 1, name:'Sansa Stark', family: 'House Stark', actorBirth: '21/02/1996', morreu: false  },
]


// Create (POST)
app.post('/new'), (req, res) => {
    const body = req.body
    if(!body) 
        return res.status(400).end();

    db.push(body);  
        return res.json(body)
}


// Read (GET)
app.get('/', (req, res) => {
    return res.json(db)
    // res.send({
    //     person: [
    //         {
    //             id: 1,
    //             name: 'Daenerys Targaryen',
    //             family: 'House Targaryen',
    //             actorBirth: 23/10/1986,
    //             morreu: true,
    //         },
    //         {
    //             id: 2,
    //             name: 'Sansa Stark',
    //             family: 'House Stark',
    //             actorBirth: 21/02/1996,
    //             morreu: false,
    //         },
    //     ]
    // })
})

// Update (PUT)
app.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

// Delete (DELETE)
app.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};
