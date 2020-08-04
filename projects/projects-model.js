const db = require('../data/db-config');

module.exports = {
  find,
  insert,
  findById,
  tasksByProjectId,
  resourcesByProjectId
}

function find(){
  return db('projects')
}

function findById(id){
  return db('projects').where({id})
}

function insert(project){
  return db('projects').insert(project)
    .then(id => findById(id))
}

function tasksByProjectId(id){
  return db('tasks').where({'project_id': id})
}

function resourcesByProjectId(id){
  return db('projects_resources as pr')
    .join('resources as r', 'pr.resource_id', 'r.id')
    .select('r.id','r.name')
    .where('pr.project_id', id)
}