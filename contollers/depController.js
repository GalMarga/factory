//depController.js
const express = require('express')
const depBL = require('../models/dep/depBl')

const router = express.Router();

router.get('/',async (req, res) => {
    let data = await depBL.getAll();

    return res.json(data);
})

router.get('/:id',async (req, res) => {
    let id = req.params.id;

    let data = await depBL.getById(id);

    return res.json(data);
})

router.post('/',async (req, res) => {
    let dep = req.body;

    let data = await depBL.addDep(dep);
    
    return res.json(data);
})

router.put('/:id',async (req, res) => {
    let id = req.params.id;
    let dep = req.body;

    await depBL.updateDep(id, dep)
    return res.json("the update successful");
})

router.delete('/:id',async (req, res) => {
    let id = req.params.id;

    await depBL.deleteDep(id)
    return res.json("the Dep was been deleted")
})

module.exports = router;