const router = require('express').Router();
const db = require('./projects-model')


router.get('/', async (req, res) => {
  try{
    const projects = await db.find()
    res.json(projects)
  } catch {
    res.status(500).json({message: "can not find projects at this time."})
  }
})

router.post('/', async (req, res) => {
  const newProject = req.body
  try{
    const Project = await db.insert(newProject)
    res.status(201).json(Project)
  }catch{
    res.status(500).json({message: "can not add projects at this time."})
  }
})

router.get('/:id/tasks', async (req, res) => {
  const {id} = req.params
  try{
    const projects = await db.tasksByProjectId(id)
    res.json(projects)
  } catch {
    res.status(500).json({message: "can not find projects at this time."})
  }
})

router.get('/:id/resources', async (req, res) => {
  const {id} = req.params
  try{
    const projects = await db.resourcesByProjectId(id)
    res.json(projects)
  } catch {
    res.status(500).json({message: "can not find projects at this time."})
  }
})


module.exports = router