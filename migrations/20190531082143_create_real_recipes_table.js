exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes", tbl => {
      tbl.increments();
  
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
  
      tbl.string("directions")
        .notNullable();
  
      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes");
  };
