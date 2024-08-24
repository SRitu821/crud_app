const express = require('express');
const router = express.Router();
const Item = require('../model/Item');

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/', async (req,res) => {
    const { name, quantity } = req.body;
    const newItem = new Item({ name, quantity });

    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;

    try {
        const updatedItem = await Item.findByIdAndUpdate(id, { name, quantity}, { new: true});
        if (!updatedItem) return res.status(404).send('Item not found');
        res.json(updatedItem);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exprots = routers;