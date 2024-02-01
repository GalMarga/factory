//userController.js
const express = require('express')
const userBL = require('../models/user/userBl')

const router = express.Router();

router.get('/',async (req, res) => {

  try {
    
    let data = await userBL.getAll();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e })
  }

})

router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userBL.getById(id);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  
router.post('/',async (req, res) => {
    let user = req.body;

    let data = await userBL.AddUser(user);
    
    return res.json(data);
})

router.put('/:id',async (req, res) => {
    let id = req.params.id;
    let user = req.body;

    await userBL.updateUser(id, user)
    return res.json("the update successful");
})

router.delete('/:id',async (req, res) => {
    let id = req.params.id;

    await userBL.deleteUser(id)
    return res.json("the user was been deleted")
})
  

module.exports = router;