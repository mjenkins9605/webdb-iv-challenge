exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .del()
    .then(function() {
      return knex("ingredients").insert([
        { name: "water" },
        { name: "yeast" },
        { name: "flour" },
        { name: "salt" },
        { name: "sugar" },
        { name: "sauce" },
        { name: "cheese" },
        { name: "pepperoni" },
        { name: "baking powder" },
        { name: "butter" },
        { name: "eggs" },
        { name: "milk" },
        { name: "chocolate" },
        { name: "beef" },
        { name: "taco seasoning" },
        { name: "lettuce" },
        { name: "salsa" },
        { name: "hard taco" },
        { name: "soft taco" },
        { name: "tomato" }
      ]);
    });
};
