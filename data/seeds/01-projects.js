
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'build app', description: "build that app"},
        {name: 'learn japaneese', description: "learn new words"}
      ]);
    });
};
