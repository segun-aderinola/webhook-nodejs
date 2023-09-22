const express = require('express');
const app = express();


app.post('/webhook', (req, res)=>{
    
    const response = req.body;
    console.log('Received Webhook payload');
    console.log(response);
    res.status(200).json({'success': {'message':'Webhook received', 'data':response} });
})


const port = 3010;
app.listen(port, console.log('Server Running on port'+port));