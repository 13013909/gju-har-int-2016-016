var express=require('express');
var app=express();
var mongodb=require('mongodb');
var qs=require('querystring')
var MongoClient=mongodb.MongoClient;
app.use(express.static('public'))
var url="http://localhost:3000/test";
var body='';

app.all('/',function(req,res)
{
	res.sendFile("index.html");
});
app.all('/insert',function(req,res)
{
	req.on('data',function(chunk)
		{
			body+=chunk;
		});
});

req.on('end',function()
{
	var data=qs.parse(body);

MongoClient.connect(url,function(err,db)
{
	if(err)
	{
		console.log("error occured"+err);
	}else{
		insertData(db,data.item,function(err,result)
			{
			db.close();
		     });
	    }
	
});


var insertData=function(db,item,callback)
{
	db.collection('item').insertone({"Stack Item":item)},function(err,result)
	{
		if(err)
		{
			console.log("error occured");
		}else
		console.log("inserted successfully");
	}); 
}




app.listen(3000);
console.log("server is running")



