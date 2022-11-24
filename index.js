// Whenever I require I import that particular module
const express = require('express');
const connection = require('./db')
const todoController = require('./controllers/todo')
const port = 8081;
const cors = require('cors');
// Gives you everything that comes with express
const app = express();
// Whether or not the resources from your server to work
app.use(cors({ origin: '*' })) //MiddleWare
app.use(express.json())
// Listen to server changes 
app.listen(port, () => console.log(`server is running on port ${port}`))
// Imported this file and used it here 
app.use('/api/todos',todoController)