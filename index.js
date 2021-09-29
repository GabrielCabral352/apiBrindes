const express = require('express');
const app = express();
const PORT = 10000;
let giftsData = [
    {
        "id": 1,
        "nome" : "Robert Bosch"
    }
]
app.get('/gifts/returnGifts/', (req, res) => {
    res.status(200).send({giftsData});
});
app.use(express.json())
app.post('/gifts/pushData/', (req, res) => {
    const letGift = req.body;
    giftsData.push({ ...letGift})
    res.send('Gift inserted on API');
});
app.get('/gifts/returnGifts/:id', (req, res) => {
    const body = req.body;
    const {id} = req.params;
    const findGift = giftsData.find((body) => body.id == id)
    res.send(findGift)
});
app.delete('/gifts/deleteGift/:id', (req, res) => {
    const gift = req.body;
    const id = req.params['id'];
    giftsData = giftsData.filter((gift) => gift.id != id);
    res.send('Deleted')
});
app.listen(
    PORT,
    () => console.log(`API SET UP!!! http://localhost:${PORT}/gifts/returnGifts/`)
);