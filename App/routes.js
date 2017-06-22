var path = require('path');
var fs = require("fs");
var csv1 = require("fast-csv");
var csv2 = require("fast-csv");
var csv = require('csvtojson');
var parse = require('csv-parser');
var fileUpload = require("express-fileupload");
const util = require('util');

var routes = function(app) {
  app.get('/data',function(req,res) {

  console.log("data enter");
    var index=0;
    var csvData = [];
    
    csv()
    .fromFile('categories.csv')
    .on('json',(jsonObj) => {
        //console.log("jsonobj"+util.inspect(jsonObj,false,null));
        //console.log("jsonobj"+JSON.stringify(jsonObj));//JSON.stringify(jsonObj)
        //var s = JSON.stringify(jsonObj);
        //console.log("s"+s);
        //console.log("jsonobj"+JSON.stringify(jsonObj));
          var b = JSON.stringify(jsonObj);
       // b.push(JSON.stringify(jsonObj));
        //console.log("b"+b);
        csvData.push(b);
    })
    .on('done',(error) => {

      console.log('end'+csvData);

      res.send(csvData);
    })
});

 app.post('/files',function(req,res) {

      console.log("saving file");
         console.log("file"+req);
          console.log("file name"+req.files.file.name);

            console.log(util.inspect(req.files.file.data, false, null))
            var file = req.files.file;

           //var path1= `${new Date()} - ${file.originalname}`;

           //var path1=`/Users/Anjali/projects/ituneApp/temp/`+`${new Date()} - ${req.files.file.name}`;

           var path1=`/Users/Anjali/projects/ituneApp/`+`categories.csv`;
            file.mv(path1,function(err){
            if(err)  console.log("err"+err);

            res.send("file uploaded");
        });
    
  });
}

module.exports = routes