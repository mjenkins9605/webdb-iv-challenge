exports.seed = function(knex, Promise) {
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      return knex("recipes_ingredients").insert([
        //quantities are just random

        //pepperoni pizza
        { recipe_id: 1, ingredient_id: 1, quantity: 4 },
        { recipe_id: 1, ingredient_id: 2, quantity: 2 },
        { recipe_id: 1, ingredient_id: 3, quantity: 6 },
        { recipe_id: 1, ingredient_id: 4, quantity: 6 },
        { recipe_id: 1, ingredient_id: 5, quantity: 8 },
        { recipe_id: 1, ingredient_id: 6, quantity: 3 },
        { recipe_id: 1, ingredient_id: 7, quantity: 9 },
        { recipe_id: 1, ingredient_id: 8, quantity: 1 },

        //cheese pizza
        { recipe_id: 2, ingredient_id: 1, quantity: 4 },
        { recipe_id: 2, ingredient_id: 2, quantity: 2 },
        { recipe_id: 2, ingredient_id: 3, quantity: 6 },
        { recipe_id: 2, ingredient_id: 4, quantity: 6 },
        { recipe_id: 2, ingredient_id: 5, quantity: 8 },
        { recipe_id: 2, ingredient_id: 6, quantity: 3 },
        { recipe_id: 2, ingredient_id: 7, quantity: 9 },
        
        //chocolate cake
        { recipe_id: 3, ingredient_id: 4, quantity: 4 },
        { recipe_id: 3, ingredient_id: 9, quantity: 4 },
        { recipe_id: 3, ingredient_id: 3, quantity: 6 },
        { recipe_id: 3, ingredient_id: 10, quantity: 8 },
        { recipe_id: 3, ingredient_id: 5, quantity: 1 },
        { recipe_id: 3, ingredient_id: 11, quantity: 1 },
        { recipe_id: 3, ingredient_id: 12, quantity: 5 },
        { recipe_id: 3, ingredient_id: 13, quantity: 11 },

        //vanilla cake
        { recipe_id: 4, ingredient_id: 4, quantity: 4 },
        { recipe_id: 4, ingredient_id: 9, quantity: 4 },
        { recipe_id: 4, ingredient_id: 3, quantity: 6 },
        { recipe_id: 4, ingredient_id: 10, quantity: 8 },
        { recipe_id: 4, ingredient_id: 5, quantity: 1 },
        { recipe_id: 4, ingredient_id: 11, quantity: 1 },
        { recipe_id: 4, ingredient_id: 12, quantity: 5 },

        //hard shell taco
        { recipe_id: 5, ingredient_id: 14, quantity: 20 },
        { recipe_id: 5, ingredient_id: 15, quantity: 9 },
        { recipe_id: 5, ingredient_id: 16, quantity: 5 },
        { recipe_id: 5, ingredient_id: 7, quantity: 2 },
        { recipe_id: 5, ingredient_id: 17, quantity: 5 },
        { recipe_id: 5, ingredient_id: 18, quantity: 8 },

        //soft shell taco
        { recipe_id: 6, ingredient_id: 14, quantity: 20 },
        { recipe_id: 6, ingredient_id: 15, quantity: 9 },
        { recipe_id: 6, ingredient_id: 16, quantity: 5 },
        { recipe_id: 6, ingredient_id: 7, quantity: 2 },
        { recipe_id: 6, ingredient_id: 17, quantity: 5 },
        { recipe_id: 6, ingredient_id: 19, quantity: 8 }
      ]);
    });
};
