const Sequelize=require("sequelize");
const sequelize=require("../utill/database");
const DataTypes = require('mysql2');


const User = sequelize.define('noun', {
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
},{
    timestamps: false,

});


module.exports=User;