export const up = async (knex) => {
  await knex.schema.createTable("database", (table) => {
    table.increments("id");
    table.text("titre").notNullable();
    table.integer("entry").notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("database");
};
