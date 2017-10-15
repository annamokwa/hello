const express = require('express')
const app = express()
const mustache = require('mustache')
const fs = require('fs')

var page = fs.readFileSync('templates/page.html').toString()

app.get('/', function (req, res) {
    res.send(mustache.render(page, {title:'tytul', galeria: [
        {img:'http://axem.pl/logo.png', alt:'logo'},
        {img:'https://www.w3schools.com/html/pic_mountain.jpg', alt:'dupa'},
    ]}))
})

app.get('/contact', function (req, res) {
    res.send(mustache.render(page, {title:'contact'}))
})

app.get('/costam', function (req, res) {
    res.send(mustache.render(page, {title:'costam'}))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})