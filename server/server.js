const express = require('express');
const quotes_data = require('./modules/all-quotes');
const app = express();
const PORT = 5000;

app.get('/quote', (req, res) => {
    const randomNumber = Math.floor(Math.random() * quotes_data.length);    
    res.send(quotes_data[randomNumber]);
});

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// app.get('/', (req, res) => {
//     console.log( 'Yep, it worked!');
//     res.send('Happy Wednesday!');
// });

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});