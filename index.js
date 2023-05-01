const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send("Hello this is a home page")
})

app.get('/about', (req, res) => {
    res.send("Hello this is a about page")
})

app.get('/help', (req, res) => {
    res.send("Hello this is a help page")
})

app.listen(4500);