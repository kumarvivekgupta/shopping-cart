const Sequelize = require('sequelize');

const sequelize = require('../../../../Desktop/nodejs-the-complete-guide/12 Working with NoSQL  Using MongoDB/00-starting-setup/util/database');

const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;
