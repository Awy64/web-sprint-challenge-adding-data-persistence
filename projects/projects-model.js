const db = require('../data/db-config');

module.exports = {
  find,
  insert,
  findById
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