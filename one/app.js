const express = require('express');
const bodyParser = require('body-parser');
const app= express();

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('Welcome');
});

app.get('/registration',function(req,res){
	res.render('registration');
});


app.get('/handleForm',function(req,res){
	res.render('handleForm',{
		"data":{
			"name" : req.query.username,
			"email" : req.query.email,
		}
	});
});

app.listen(80);