const express = require('express');
const morgan = require('morgan')
const app = express();
const router = express.Router();

function logger(req){
    req = express.request
    console.log(`${req.method} : ${req.path}`)
}


//routes 

router.get('/',(req ,res)=>{
    res.send('Hey there');
});

router.get('/about',(req,res)=>{
    res.json({data:{
        host:req.hostname,
        method:req.method,
        path:req.path
        
    }})
})


app.use(morgan('dev'));
app.use('/',router);


app.listen(80);