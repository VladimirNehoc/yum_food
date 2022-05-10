const getAll = require('./recipes/get-all.service');
const getRecipeById = require('./recipes/get-recipe-by-id.service');
const updateRecipe = require('./recipes/update-recipe.service');

module.exports = function (app) {
  app.configure(getAll);
  app.configure(getRecipeById);
  app.configure(updateRecipe);
};
