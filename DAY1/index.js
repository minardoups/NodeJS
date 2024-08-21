const express = require('express');
const port = 8000;
const app = express();

const router = express.Router();

app.use(express.json());		//handle form fields in JSON format
app.use(express.urlencoded({extended:false}));  //String or array

router.get('/', (request, response)=> 
	response.send('You are on the root route'));

router.get('/aboutus', (request, response)=> 
	response.send('You are on the about us route'));

router.post('/addemployee', (request, response)=>{
	let empName = request.body.empName;
	let empPass = request.body.empPass;

	response.send('POST success, you sent ${empName} and ${empPass}, thanks!');

});

app,use('/', router);		//to use router once you get to the root 
//
app.listen(port, ()=> console.log('Listening' + port));


/*
//create a server object: 
http 
  .createServer(function (req, res) { 
    res.write("<h1>Hello World!</h1>");  
    //write a response to the client 
     
    res.end();  
    //end the response 
  }) 
  .listen(8080);  
//Server runs on localhost:8080 
*/