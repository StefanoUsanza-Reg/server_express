const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//server express in ascolto sulla porta 3100
app.listen(3100, ()=>{
    console.log("server listening on port 3100:")
})