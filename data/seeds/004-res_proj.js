
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('res_proj').del()
    .then(function () {
      // Inserts seed entries
      return knex('res_proj').insert([
        {id: 1, project_id: 1, resource_id: 1},
        {id: 2, project_id: 1, resource_id: 2},
        {id: 3, project_id: 1, resource_id: 4},
        {id: 4, project_id: 1, resource_id: 6},
        {id: 5, project_id: 2, resource_id: 1},
        {id: 6, project_id: 2, resource_id: 5}
      ]);
    });
};
