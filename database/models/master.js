'use strict';
module.exports = (sequelize, DataTypes) => {
  const Master = sequelize.define('Master', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Master.associate = function(models) {
    // associations can be defined here
    Master.hasMany(models.Order, {
      foreignKey: 'masterId',
      as: 'orders',
      onDelete: 'CASCADE',
    });
  };

  Master.addScope(
    'withOrders',
    () => ({
      include: [
        {
          model: sequelize.models.Order,
          as: 'orders'
        }
      ]
    })
  );
  return Master;
};
