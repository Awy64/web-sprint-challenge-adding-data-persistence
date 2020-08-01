const db = require('../data/db-config');

module.exports = {

}

function find(){
  return db('projects as p').select('p.name', 'p.description')
}