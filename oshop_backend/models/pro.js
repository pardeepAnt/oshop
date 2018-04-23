'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pro = sequelize.define('Pro', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Pro.associate = function(models) {
    // associations can be defined here
  };
  return Pro;
};