const express = require('express')
const axios = require('axios');
const Post = require('../models/post')
express.b




exports.getPosts = (req,res) =>{
 Post.find((err,post)=>{
     if(err) return console.log(err);

     res.json({
         data:post
     })
 })
}

exports.createPost = (req,res)=>{
   const post = new Post(req.body);
    post.save((err,result)=>{
        if(err){
            res.status(500).json(
              err
            )
        }
    
        res.status(200).json({
            post:result
        })

    })
    // console.log(post)
    // console.log(req.body)

}
