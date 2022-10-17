const { Router } = require('express');

const route = Router();

const urlSchema = require('../models/url')


route.get('/:pos', async (req, res) => {
const {pos} = req.params
    try {
        const url = await urlSchema.find()
        return res.redirect(url[pos-1].direction)
    } catch (error) {
        return res.status(400).send("error");
    }
})

route.get('/', async (req, res) => {
    // const { directionId } = req.params;

    try {
        const url = await urlSchema.find();
        console.log("🚀 ~ file: url.js ~ line 18 ~ route.get ~ url", url)
        return res.send(url)
    } catch (error) {
        return res.status(400).send("error");
    }
})

route.post('/', async (req, res) => {
    
    try{
        const newurl = new urlSchema(req.body)
        newurl.save()
        const url = await urlSchema.find();
        res.status(201).send({data:url.length})
    
    }
    catch{
        return res.send("error catch");
    }
})

module.exports = route;