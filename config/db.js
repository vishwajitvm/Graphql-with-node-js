// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('all-india', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

module.exports = sequelize;
