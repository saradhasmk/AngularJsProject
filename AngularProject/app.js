/**
 * Created by saradhasmk on 3/19/2016.
 */
'use strict';
var http = require('http');
var path = require('path');
var express=require('express');
var app=express();
var bodyparser=require("body-parser");
var mongojs=require("mongojs");
var db=mongojs("eventmanagement",['eventmanagement']);
this.getTime = function () {
    return new Date().getTime().toString();
};

console.log(path.join(__dirname, '../')+"client/index.html");
app.use(express.static(path.join(__dirname, '../')+"client"));
app.use(bodyparser.json());
app.get('/volunteerlist',function(req,res){
    var count = db.eventmanagement.find({id:"1"}).count();
  count=db.eventmanagement.find().count();
    db.eventmanagement.find(function(err,docs){
        console.log("Docs ::: "+JSON.stringify(docs));
        console.log("Docs ::: "+JSON.stringify(Object.keys(docs).length));
        res.json(docs);
    });
});


app.post('/addvolunteer',function(req,res){
    console.log("from add");
    console.log(JSON.stringify(req.body));
   db.eventmanagement.insert(req.body,function(err,docs){
        res.json(docs);
        console.log("sho ::: "+JSON.stringify(docs));
    });
});

app.put('updatebookinfo/:id',function(req,res){
    var bookId=req.params.id;
   db.librarysystem.findAndModify({query:{_id:mongojs.ObjectId._id},update:{$set:{name:req.body.name,number:req.body.number,email:req.body.email}},new:true},function(err,dbdocs){
       res.json(dbdocs);
   })
});
module.exports=app;