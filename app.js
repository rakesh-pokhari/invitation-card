const express=require('express');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');

const PORT = 3000;
const app=express();



app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('./src/routes/authentication.route'));
app.use(require('./src/routes/account.route'));

//Start express server
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})