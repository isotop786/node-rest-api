const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title:{
        type: String,
        requied:"Title is required",
        maxlength:150,
        minlength:4
    },

    body:{
        type: String,
        required: "Post body is required",
        maxlength:2000,
        minlength:4
    }
});

module.exports = mongoose.model("Post",postSchema);