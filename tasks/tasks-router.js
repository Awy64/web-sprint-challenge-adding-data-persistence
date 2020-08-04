const router = require('express').Router();
const db = require('./tasks-model')


router.get('/', async (req, res) => {
  try{
    const task = await db.find()
    res.json(task)
  } catch {
    res.status(500).json({message: "can not find tasks at this time."})
  }
  
})

router.post('/', async (req, res) => {
  const newtask = req.body
  try{
    const task = await db.insert(newtask)
    res.status(201).json(task)
  }catch{
    res.status(500).json({message: "can not add tasks at this time."})
  }
})


module.exports = router