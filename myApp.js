let express = require('express');
let app = express();

app.use('/public', express.static())

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})
console.log("Hello World")


































 module.exports = app;
