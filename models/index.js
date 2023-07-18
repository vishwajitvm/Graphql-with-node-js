const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Sync Error:', error);
    }
})();

db.users = require('./Users')(sequelize, DataTypes);

module.exports = db;
