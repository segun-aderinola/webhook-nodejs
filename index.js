const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.post('/webhook', (req, res)=>{
    
    const response = req.body;

    console.log('Received Webhook payload');
    console.log(req.body);
    res.status(200).json({'success': {'message':'Webhook received', 'data':response} });
})


const port = process.env.PORT || 3010;
app.listen(port, console.log('Server Running on port '+port));