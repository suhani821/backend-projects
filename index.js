const { configDotenv } = require('dotenv');
const express =require('express')
require('dotenv').config()

const app = express();
 const port="5000"
app.get('/', (req,res)=>{
    res.send("hello users your request is in process") 

})
app.get('/about',(req,res)=>{
    res.send("it is about page");
})
app.listen(process.env.PORT, ()=>{
    console.log( `${process.env.PORT} is running perfectly  `)
})