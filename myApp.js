let express = require('express');
let app = express();
require('dotenv').config()

app.use('/public', express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", function(req, res){
    let responseMessage = "hello json";
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE === "uppercase"){
        console.log("upper")
        res.json({
            "message": responseMessage.toUpperCase()
        })
    }else{
        console.log("lower")
        res.json({
            "message": responseMessage.toLowerCase()
        })
    }
    
})


































 module.exports = app;
