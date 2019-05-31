exports.seed = function(knex, Promise) {
  return knex("recipes")
    .del()
    .then(function() {
      return knex("recipes").insert([
        {
          name: "Pepperoni Pizza",
          directions: "combine water, yeast, flour, salt, sugar, sauce, cheese, and pepperoni",
          dish_id: 1
        },
        {
          name: "Cheese Pizza",
          directions: "combine water, yeast, flour, salt, sugar, sauce, and cheese",
          dish_id: 2
        },
        {
          name: "Chocolate Cake",
          directions: "combine salt, baking powder, flour, butter, sugar, eggs, milk, and chocolate",
          dish_id: 3
        },
        {
          name: "Vanilla Cake",
          directions: "combine  salt, baking powder, flour, butter, sugar, eggs, and milk",
          dish_id: 4
        },
        {
          name: "Hard Shell Taco",
          directions: "combine beef, taco seasoning, lettuce, cheese, salsa, and a hard taco shell",
          dish_id: 5
        },
        {
          name: "Soft Shell Taco",
          directions: "combine taco seasoning, lettuce, tomato, cheese, and a soft taco shell",
          dish_id: 6
        }
      ]);
    });
};
