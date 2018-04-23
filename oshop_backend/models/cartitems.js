'use strict';
module.exports = (sequelize, DataTypes) => {
  var cartItems = sequelize.define('cartItems', {
    cartId: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  cartItems.associate = function(models) {
    // associations can be defined here
  };
  return cartItems;
};