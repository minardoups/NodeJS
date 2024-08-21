const express = require('express');
const port = 8000;
const app = express();

const router = express.Router();
const routes = require('./routes/routes');  //let it know when the routes

routes(router);
//
app.use(express.json());		//handle form fields in JSON format
app.use(express.urlencoded({extended:false}));  //String or array
app,use('/', router);		//to use router once you get to the root 
//
app.listen(port, ()=> console.log('Listening' + port));

