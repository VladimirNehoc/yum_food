module.exports = function (app) {
  const service = {
    async find(params) {
      try {
        const { models } = app.get('sequelizeClient');

        const {
          recipes,
          steps,
          difficulties,
          recipesGroups,
          ingredients,
          ingredientsGroups,
        } = models;

        const { id } = params.query;

        const result = await recipes.findOne({
          where: {
            id,
          },
          include: [
            {
              model: steps,
              as: 'steps',
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
                attributes: ['unitId', 'count'],
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
        return error.message;
      }
    },
  };

  app.use('/get-recipe-by-id', service);
};
