'use strict'

const express = require('express');
const app = express();
const db = require('diskdb');

app.use(express.static('public'));

db.connect('db',['oilRecord']);

let item = {
            "id": "f352ce73e487992b41803ac23fd84f73",
            "createtime": "2017-03-01 12:05",
            "creator": "lsqy",
            "oil_num": "12.27",
            "oil_weight": "6.70 公斤",
            "oil_density": "0.8800",
            "oil_unit": "1",
            "oil_instock": "2.00",
            "isModify": "0",
            "oilImg": "0"
    };

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Content-Type", "application/json;charset=utf-8");
   // 让options请求快速返回
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
}});

app.get('/',(req,res) => {
    res.send('hello world!');
});


app.get('/api/list',(req,res) => {
    let List =  db.oilRecord.find();
    console.log(List.length);
    res.json(List);
})

app.get('/api/add',(req,res) => {
    let saved = db.oilRecord.save(item);
    res.json(saved);
});

app.listen(3009);