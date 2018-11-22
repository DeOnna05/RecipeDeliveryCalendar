const express = require('express');
const path = require('path');
const db = require('../models');
const app = express();

module.exports = function() {

app.get('/', function(req, res){
    res.send('this is the html get')
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

}