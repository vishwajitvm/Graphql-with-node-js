const sequelize = require('sequelize');
const sequelize = new sequelize('all-india' , 'root' , '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
})

sequelize.authenticate().then(() => {
    console.log("Mysql connected");
}).catch(e => {
    console.log('Mysql Error' + e);
})

module.exports = sequelize;