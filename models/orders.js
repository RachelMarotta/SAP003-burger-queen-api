'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    client: DataTypes.STRING,
    status: DataTypes.STRING,
    tableNumber: DataTypes.INTEGER,
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.ordersItems)
  };
  return orders;
};