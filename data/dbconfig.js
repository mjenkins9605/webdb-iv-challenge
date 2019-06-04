const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
    return db('dishes');
  }

  function addDish(dish) {
    return db('dishes')
      .insert(dish, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }
  
  function getDish(id) {
    return db('dishes')
      .where({ id })
      .first();
  }
  
  function getRecipes() {
    return db('recipes');
  }
  
  function addRecipe(recipe) {
    return db('recipes')
      .insert(recipe, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }
