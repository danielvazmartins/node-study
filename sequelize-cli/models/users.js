'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    use_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    use_email: DataTypes.STRING,
    use_name: DataTypes.STRING,
    use_password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};