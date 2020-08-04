
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "start school", notes: "lambda school", project_id: 1},
        {description: "complete school", notes: "lambda school", project_id: 1},
        {description: "watch youtube videos about learning new words", project_id: 2},
        {description: "ask friends for help", project_id: 2}

      ]);
    });
};
