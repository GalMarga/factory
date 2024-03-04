//depController.js
const express = require('express')
const shiftBL = require('../models/shifts/shiftsBl')

const router = express.Router();

router.get('/',async (req, res) => {
    let data = await shiftBL.getAll();

    return res.json(data);
})

router.get('/:id',async (req, res) => {
    let id = req.params.id;

    let data = await shiftBL.getById(id);

    return res.json(data);
})

router.post('/',async (req, res) => {
    let shift = req.body;

    let data = await shiftBL.addShift(shift);
    
    return res.json(data);
})

router.put('/:id',async (req, res) => {
    let id = req.params.id;
    let user = req.body;

    await shiftBL.putUser(id, user)
    return res.json("the update successful");
})

router.delete('/:id',async (req, res) => {
    let id = req.params.id;

    await shiftBL.deleteShift(id)
    return res.json("the user was been deleted")
})

module.exports = router;