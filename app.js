const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {validationResult } = require('express-validator');


app.use(bodyParser.json())

app.get('/',(req,res,next)=>{
    res.status(200).json({
        status:"OK"
    });

})

app.post('/signUp',(req,res,next)=>{
    const request=req.body;

    res.status(200).json({
        data:request
    })
})

app.listen(3000,()=>{
    console.log('App is started on port 3000')
})