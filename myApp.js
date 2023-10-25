let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');

app.use('/public', express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.use("/", function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.use(bodyParser.urlencoded({extended: false}));

app.get("/now", function(req,res, next){
    req.time = new Date().toString();
    console.log("first")
    next();
}, function(req,res){
    console.log("second")
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

app.get("/:word/echo", function(req, res){
    const {word } = req.params;
    res.json({"echo": word})
})

app.get("/name", function(req, res){
    const {first, last} = req.query;
    console.log(`firstname: ${first} lastname: ${last}`)
    res.json({"name": `${first} ${last}`})
}).post("/name", function(req, res){
    const {first, last} = req.body;
    console.log(`firstname: ${first} lastname: ${last}`)
    res.json({"name": `${first} ${last}`})
})


































 module.exports = app;
