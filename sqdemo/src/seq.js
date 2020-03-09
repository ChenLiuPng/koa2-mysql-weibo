const Sequelize = require("sequelize");

const conf = {
  host: "localhost",
  dialect: "mysql"
};

const seq = new Sequelize("koa2_weibo_db", "root", "123456", conf);

// seq
//   .authenticate()
//   .then(() => {
//     console.log("ok");
//   })
//   .catch(() => {
//     console.log("no");
//   });

module.exports = seq;
