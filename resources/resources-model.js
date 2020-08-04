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

function insert(resource){
  return db('resources').insert(resource)
    .then(id => findById(id))
}