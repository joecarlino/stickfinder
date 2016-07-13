exports.up = function(knex, Promise) {
return knex.schema.createTable('sticks', function(table) {
    table.increments('id').primary();
    table.string('brand');
    table.string('flex');
    table.string('size');
    table.string('curve');
    table.string('sku').unique();
    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
  });
};


exports.down = function(knex, Promise) {

};
