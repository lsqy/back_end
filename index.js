'use strict'

const express = require('express');
const app = express();
const db = require('diskdb');

app.use(express.static('public'));

db.connect('db',['articles']);

let article = {
    title : 'diskDB rocks',
    published : 'today',
    rating : '5 stars'
}


app.get('/',(req,res) => {
    console.log(11);
    res.send('hello world!');
    //save
    let savedArticle = db.articles.save(article);
});

app.listen(3009);