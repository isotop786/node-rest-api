const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();


router.get("/",postController.getPosts);
router.post("/",postController.setPost);

 
module.exports = router;