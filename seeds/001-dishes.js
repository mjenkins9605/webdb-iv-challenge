exports.seed = function(knex, Promise) {
  return knex("dishes").then(function() {
    return knex("dishes").insert([
      { id: 1, name: "pizza" },
      { id: 2, name: "cake" },
      { id: 3, name: "taco" }
    ]);
  });
};
