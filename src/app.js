const express = require('express');
const path = require('path');
const app = express();

const multer = require('multer');

const upload = multer( {dest: 'uploads/'})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.arguments(express.urlencoded())

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', upload.single('imagen'), (req, res) => {
    console.log(req.file);
    res.send('recibido')
});

module.exports = app;
