
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project 1', description:'finish the sprint', completed: 0},
        {id: 2, name: 'project 2', description:'do something', completed: 0},
        {id: 3, name: 'project 3', description:'do another thing', completed: 0},
        {id: 4, name: 'project 4', description:'do yet another thing', completed: 0},
        {id: 5, name: 'project 5', description:'do the first thing again', completed: 0},
        {id: 6, name: 'project 6', description:'do literally nothing', completed: 0}
      ]);
    });
};
