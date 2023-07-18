// models/Users.js
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: { 
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return Users;
};
