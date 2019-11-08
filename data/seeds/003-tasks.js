
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, task:'fork the repo', notes:'forked', completed:'true'},
        {id: 2, project_id: 1, task:'clone the repo', notes:'', completed:'false'},
        {id: 3, project_id: 1, task:'do the sprint', notes:'', completed:'false'},
        {id: 4, project_id: 2, task:'do the first thing', notes:'', completed:'false'},
        {id: 5, project_id: 2, task:'do the second thing', notes:'', completed:'false'}
      ]);
    });
};
