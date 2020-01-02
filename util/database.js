// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

// const mongodb=require('mongodb');

// const MongoClient=mongodb.MongoClient;
// let _db;

// const mongoConnect=callback=>{


// MongoClient.connect('mongodb+srv://vivekg:<vivekg>@clustermongodb-546aj.mongodb.net/shop?retryWrites=true',{ useUnifiedTopology: true})
// .then(result=>{
// console.log('!CONNECTed',client);

// _db=client.db();
// callback();
// }).catch(err=>{

// });
// };

let _db;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vivekg:vivekg@clustermongodb-546aj.mongodb.net/shop?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });
const mongoConnect=callback=>{client.connect(err => {
 
  console.log('!CONNECTed',client);
  // perform actions on the collection object
  // client.close();
  _db=client.db();
  callback();
});
}

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw "No db found";
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
