
const getDb=require('../util/database').getDb;


class Product {
  constructor(title,description,price,imageUrl){
    this.title=title;
    this.description=description;
    this.price=price;
    this.imageUrl=imageUrl;
  }
  save(){
const db=getDb();
console.log(db);
db.collection('products').insertOne(this).then(result=>{
console.log(result);
}).catch(err=>{
console.log(err);
});
  }
}
// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

module.exports = Product;




// const Sequelize = require('sequelize');

// const sequelize = require('../../../../Desktop/nodejs-the-complete-guide/12 Working with NoSQL  Using MongoDB/00-starting-setup/util/database');