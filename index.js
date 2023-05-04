const express = require("express");
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (req, res) => {

    const user = {
        name: "Om Davra",
        img: {
            src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            alt: "Photo of user"
        },
        redirect: "/about",
        skills: [
            "React Js",
            "Next Js",
            "Node Js",
            "Express Js",
            "Redux",
        ]
    }

    res.render('profile', { user })
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`)
})

app.listen(4500);