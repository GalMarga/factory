const express = require('express')
const empBL = require('../models/emp/empBl')

const router = express.Router();

router.get('/',async (req, res) => {
    let data = await empBL.getAll();

    return res.json(data);
})
//id
router.get('/:id',async (req, res) => {
    let id = req.params.id;

    let data = await empBL.getById(id);

    return res.json(data);
})

//name
router.get('/', async (req, res) => {

  let name = req.query.name;
  try {

    let data = await empBL.getByName(name);
    return res.json(data);

  } catch (e) {
    console.error(e)

  }

});

router.post('/',async (req, res) => {
    let newEmp = req.body;

    let data = await empBL.addEmp(newEmp);
    
    return res.json(data);
})

router.put('/:id',async (req, res) => {
    let id = req.params.id;
    let user = req.body;
try {
    await empBL.updateEmp(id, user)
    return res.json("the update successful");
} catch {
    console.error(err);
}
})

router.delete('/:id',async (req, res) => {
    let id = req.params.id;

    await empBL.deleteEmp(id)
    return res.json("the user was been deleted")
})

module.exports = router;