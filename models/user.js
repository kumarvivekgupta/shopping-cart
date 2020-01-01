const Sequelize = require('sequelize');

const sequelize = require('../../../../Desktop/nodejs-the-complete-guide/12 Working with NoSQL  Using MongoDB/00-starting-setup/util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;
