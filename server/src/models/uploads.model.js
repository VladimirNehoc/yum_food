// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const uploads = sequelizeClient.define('uploads', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    format: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.id}.${this.format}`;
      },
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  // eslint-disable-next-line no-unused-vars
  uploads.associate = function (models) {
    const {
      recipes,
    } = models;

    uploads.hasOne(recipes, {
      foreignKey: 'imageId',
      as: 'recipe',
    });
  };

  return uploads;
};
