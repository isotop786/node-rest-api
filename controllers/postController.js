const bodyParser = require('body-parser')
const axios = require('axios');




exports.getPosts = (req,res) =>{
    res.json({
        post:[
            {
                id:1,
                title:"first post"
            },
            {
                id:2,
                title:"second post"
            }
        ]
    })
}

exports.setPost =(req,res)=>{
    const name = req.body.name;
    const id = req.body.id;
    
   console.log(name, id);
}

