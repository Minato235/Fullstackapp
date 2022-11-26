const Sequelize=require("sequelize");
const sequelize=require("../utill/database");
const DataTypes = require('mysql2');

const User2 = sequelize.define('new', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    phoneNo: {
        type: Sequelize.STRING,
        // unique: true,
        // allowNull:false
    }
},
{
    timestamp:false
});


module.exports=User2;