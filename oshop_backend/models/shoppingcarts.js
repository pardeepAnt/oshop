'use strict';
module.exports = (sequelize, DataTypes) => {
  var shoppingCarts = sequelize.define('shoppingCarts', {}, {});
  shoppingCarts.associate = function(models) {
    // associations can be defined here
  };
  return shoppingCarts;
};