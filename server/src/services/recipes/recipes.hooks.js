module.exports = {
  before: {
    all: [],
    find: [async (context) => {
      const { models } = context.app.get('sequelizeClient');

      const { uploads } = models;

      context.params.sequelize = {
        raw: false,
        include: [
          {
            model: uploads,
            as: 'image',
          },
        ],
      };

      return context;
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
