const _ = require('lodash');

module.exports = function (app) {
  const service = {
    async create(data) {
      try {
        const { models } = app.get('sequelizeClient');

        const { steps, recipesIngredients } = models;

        const stepsData = [...data.steps];
        const ingredientsData = [...data.ingredients];

        delete data.steps;
        delete data.ingredients;

        const recipeData = { ...data };

        const recipeResult = recipeData.id
          ? await app.service('recipes').patch(recipeData.id, recipeData)
          : await app.service('recipes').create(recipeData);

        await Promise.all(
          _.map(stepsData, (step) => steps.findByPk(step.id).then((res) => {
            if (res) {
              if (step.deleted) {
                return res.destroy();
              }

              return app.service('steps').patch(step.id, { ...step, recipeId: recipeResult.id });
            }

            return app.service('steps').create({ ...step, recipeId: recipeResult.id });
          })),
        );

        await Promise.all(
          _.map(
            ingredientsData,
            (ingredient) => recipesIngredients.findOne({
              where: {
                recipeId: recipeResult.id,
                ingredientId: ingredient.ingredientId,
              },
            })
              .then((res) => {
                if (res) {
                  if (ingredient.deleted) {
                    return res.destroy();
                  }

                  return res.update({ ...ingredient, recipeId: recipeResult.id });
                }

                return app.service('recipes-ingredients').create({ ...ingredient, recipeId: recipeResult.id });
              }),
          ),
        );

        const createdRecipe = await app.service('get-recipe-by-id').get(recipeResult.id);

        return createdRecipe;
      } catch (error) {
        throw Error(error);
      }
    },
  };

  app.use('update-recipe', service);
};
