const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'node_crud'
})

connection.connect((error) => {
    if (error) console.log(error);
    else console.log('Database Connected')
})


app.get('/', (req, res) => {
    res.send('CRUD Operation using NodeJS / Express / MySQL')
})



// server listening
app.listen(port, () => {
    console.log(`Server is litening on port ${port}`);
})