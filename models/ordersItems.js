'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersItems = sequelize.define('ordersItems', {
    productId: DataTypes.INTEGER,
    ordersId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  ordersItems.associate = function(models) {
    ordersItems.belongsTo(models.products)
    ordersItems.belongsTo(models.orders)
  };
  return ordersItems;
};