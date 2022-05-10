module.exports = function (app) {
  const service = {
    async get(id) {
      try {
        const { models } = app.get('sequelizeClient');

        const {
          recipes,
          steps,
          difficulties,
          recipesGroups,
          ingredients,
          ingredientsGroups,
          recipesIngredients,
          uploads,
        } = models;

        const result = await recipes.findOne({
          where: {
            id,
          },
          order: [
            [steps, 'order', 'asc'],
            [ingredients, recipesIngredients, 'order', 'asc'],
          ],
          include: [
            {
              model: uploads,
              as: 'image',
            },
            {
              model: steps,
              as: 'steps',
              include: [
                {
                  model: uploads,
                  as: 'image',
                },
              ],
            },
            {
              model: difficulties,
              as: 'difficult',
            },
            {
              model: recipesGroups,
              as: 'recipesGroup',
            },
            {
              model: ingredients,
              as: 'ingredients',
              through: {
                attributes: ['unitId', 'count', 'order'],
              },
              include: [
                {
                  model: ingredientsGroups,
                  as: 'ingredientsGroup',
                },
              ],
            },
          ],
          limit: 1,
        });

        return result;
      } catch (error) {
        throw Error(error);
      }
    },
  };

  app.use('get-recipe-by-id', service);
};
