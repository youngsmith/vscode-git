const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const post = require('../../models/post');

// get posts
router.get('/', (req,res)=>{
    post
        .find({})
        .exec()
        .then((result)=>{
            res.status(201).send(result);
        })
        .catch((err)=>{
            console.error(err);
        });
});


// add post
router.post('/',(req,res)=>{
    console.log('request to api/post by post method');
    console.log(req.body.data);
    const Post = new post({
        _id: new mongoose.Types.ObjectId(),
        data: req.body.data
    });
    Post
        .save()
        .then((result)=>{
            res.status(201).json({msg:'inserted!'});
        })
        .catch(err => res.status(500).json({msg:err}));
});


// delete post
router.delete('/:id',async (req,res)=>{
    const result = await post.deleteOne({_id: new mongoose.ObjectId(req.params.id)});
    res.json({msg:result});
});


module.exports = router;