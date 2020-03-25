'use strict';
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define('like', {
  }, {});
  like.associate = function(models) {
    like.belongsTo(models.user)
    like.belongsTo(models.story)
  };
  return like;
};