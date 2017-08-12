var express = require("express");
var app = express();
var formidable = require('express-formidable');
var fs = require ('fs');



fs.readFile('path/to/file', function (error, file) {
    // do something
});

app.use(express.static("public"));

app.use(formidable());

app.post('/create-post', function (req, res) {
   fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    var parsedFile = JSON.parse(file);
    console.log(parsedFile);
    parsedFile[Date.now()]=req.fields.blogpost;
    
        fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), function (error) {
         console.log (parsedFile)
        });
    });
});

    
app.listen(8080, function () {
    


});
