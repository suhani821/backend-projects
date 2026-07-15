const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors()); 
const port = process.env.PORT || 3000
const jokes=[ {"id":"01",
        "title": "joke 1",
        "description": " this is joke 1"

    },
{"id":"02",
        "title": "joke 2",
        "description": " this is joke 2"

    },
{"id":"01",
        "title": "joke 3",
        "description": " this is joke 3"

    }]
   
app.get('/jokes',(req,res)=>{
    res.json(jokes)
    app.get('/',(req,res)=>{
        res.send("hello world you are on home page")
    })
})
app.listen((port),()=>{
    console.log(port);
})