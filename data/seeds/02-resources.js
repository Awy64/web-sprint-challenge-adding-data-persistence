
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'computer room', description: "lab at school"},
        {name: 'lambda school', description: "the best"},
        {name: 'youtube'},
        {name: 'friends', description: "if i had any"},
        {name: 'car'}

      ]);
    });
};
