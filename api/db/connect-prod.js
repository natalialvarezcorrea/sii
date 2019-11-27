const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "bfkkm4e7pvc5pvoguuoc",
  "uaxx0pudkhzqsrag",
  "kuxoJGI5ni9VJR2cHLET",
  {
    host: "bfkkm4e7pvc5pvoguuoc-mysql.services.clever-cloud.com",
    dialect: "mysql",
    port: "3306",
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
);
module.exports = sequelize;
