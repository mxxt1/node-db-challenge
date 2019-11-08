
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'matt gill', description: 'a valuable resource'},
        {id: 2, name: 'software license', description: 'Microsoft Office 1998'},
        {id: 3, name: 'macbook', description: 'to do all the things'},
        {id: 4, name: 'windows pc', description: 'suffer in silence'},
        {id: 5, name: 'linux pc', description: 'all the cools kids are doing it'},
        {id: 6, name: 'vscode', description: 'what would we do without you?'}
      ]);
    });
};
