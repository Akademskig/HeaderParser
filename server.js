var express = require('express');
var app = express();
var path = require('path');

var html = path.join(__dirname, "index.html");

app.get('/', function(req,res){
    res.sendFile(html);
})

app.get('/mydata',function(req,res){
    var lang = req.headers["accept-language"].split(",")[0];
    var system = req.headers["user-agent"].split("(")[1].split(")")[0]
    res.send({"IP adress": req.headers["x-forwarded-for"],
    "Language": lang,
    "System": system
    });
})

app.listen(process.env.PORT || 8080, function(){
    console.log("Listening");
})
