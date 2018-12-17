const express = require("express");
const router = express.Router();

// item model

const Item = require("../../models/Item");

router.get("/api/items", (req,res)=>{
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post("/api/items", (req,res)=>{
    const newItem = new Item ({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

router.delete("/api/items/:id", (req, res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({succes: false}))
});

module.exports = router;