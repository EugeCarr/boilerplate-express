let express = require('express');
let app = express();

const assets_path = __dirname + '/public';
console.log(assets_path)
app.use(assets_path, express.static())

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})
console.log("Hello World")


































 module.exports = app;
