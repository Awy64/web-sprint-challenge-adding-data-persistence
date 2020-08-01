const db = require('../data/db-config');

module.exports = {
  find,
  insert,
  findById
}

function find(){
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as Project Name', 'p.description as Project description')
}

function findById(id){
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as Project Name', 'p.description as Project description').where({'t.id': id})
}

function insert(resource){
  return db('tasks').insert(resource)
    .then(id => findById(id))
}