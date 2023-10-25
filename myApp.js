let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", function(req, res){
    let responseMessage = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({
            "message": responseMessage.toUpperCase()
        })
    }else{
        res.json({
            "message": responseMessage.toLowerCase()
        })
    }
    
})


































 module.exports = app;
