import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('images', (table) => {
    table.increments('id');
    table.string('path', 255).notNullable();
    table.integer('userId').unsigned().notNullable();
    table.foreign('userId').references('users.id').onDelete('CASCADE');
    table.float('lat').nullable();
    table.float('lon').nullable();
    table.string('city').nullable();
    table.string("deviceModel").nullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('images');
}
