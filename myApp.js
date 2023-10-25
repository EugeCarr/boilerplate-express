let express = require('express');
let app = express();
require('dotenv').config()

app.use('/public', express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.use("/", function(req, res){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    res.send()
})

app.get("/now", function(req,res, next){
    req.time = new Date().toString();
    next()
}, function(req,res){
    console.log(req.time);
    console.log({
        "time": req.time
    })
    res.json({
        "time": req.time
    })
})


app.get("/json", function(req, res){
    let responseMessage = "Hello json";

    console.log({
        messageStyle: process.env.MESSAGE_STYLE,
    })
    if(process.env.MESSAGE_STYLE === "uppercase"){
        console.log("upper")
        res.json({
            "message": responseMessage.toUpperCase()
        })
    }else{
        console.log("lower")
        res.json({
            "message": responseMessage
        })
    }
    
})


































 module.exports = app;
