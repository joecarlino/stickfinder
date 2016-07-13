exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sticks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('sticks').insert({brand: 'Bauer', flex: 'senior', curve: 'mid', size: 'senior'}),
        knex('sticks').insert({brand: 'STX', flex: 'senior', curve: 'mid-heel', size: 'senior'}),
        knex('sticks').insert({brand: 'CCM', flex: 'senior', curve: 'mid', size: 'junior'}),
      ]);
    });
};
