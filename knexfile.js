module.exports = {
 development: {
   client: 'postgresql',
   connection: {
     database: 'stickfinder',
     user:     'postgres',
     password: ''
   },
   pool: {
     min: 1,
     max: 2
   },
   migrations: {
     tableName: 'knex_migrations',
     directory: 'db/migrations'
   },
   seeds: {
     directory: 'db/seeds'
   },
 },
};
