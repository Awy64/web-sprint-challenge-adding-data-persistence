const db = require('../data/db-config');

module.exports = {
  find,
  insert,
  findById
}

function find(){
  return db('resources')
}

function findById(id){
  return db('resources').where({id})
}

function insert(project){
  return db('resources').insert(project)
    .then(id => findById(id))
}