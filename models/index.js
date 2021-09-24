const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Student extends Model {}

Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    campus: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Student};