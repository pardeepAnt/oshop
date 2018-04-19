'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.STRING,
    imageUrl: DataTypes.TEXT
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};