exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
      tbl.string("email");
    })
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("title").notNullable();
      tbl.string("source");
      tbl.string("category").notNullable();
      tbl.string("image");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("step").notNullable();
      tbl.string("details").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
