const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send(`
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    `);
});

app.get("/about", (req, res) => {
    res.send(`
    <h1 style="background-color:powderblue;">This is a about page</h1>
    <p style="background-color:tomato;">This is a paragraph.</p>
    `);
});

app.get("/help", (req, res) => {
    res.send(`
    <p>My favorite color is <del>blue</del> red.</p>
    `);
});

app.listen(4500);