
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project 1', description:'finish the sprint', completed: 'false'},
        {id: 2, name: 'project 2', description:'do something', completed: 'false'},
        {id: 3, name: 'project 3', description:'do another thing', completed: 'false'},
        {id: 4, name: 'project 4', description:'do yet another thing', completed: 'false'},
        {id: 5, name: 'project 5', description:'do the first thing again', completed: 'false'},
        {id: 6, name: 'project 6', description:'do literally nothing', completed: 'false'}
      ]);
    });
};
