const router = require('express').Router();
const db = require('./resources-model')


router.get('/', async (req, res) => {
  try{
    const resource = await db.find()
    res.json(resource)
  } catch {
    res.status(500).json({message: "can not find resources at this time."})
  }
  
})

router.post('/', async (req, res) => {
  const newResource = req.body
  try{
    const Resource = await db.insert(newResource)
    res.status(201).json(Resource)
  }catch{
    res.status(500).json({message: "can not add resources at this time."})
  }
})


module.exports = router