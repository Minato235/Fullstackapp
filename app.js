const path = require('path')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const User = require('./models/User');
// const User2 = require('./models/User2');

const sequelize = require("./utill/database");
const userRoutes=require("./routes/user")



sequelize.sync()
.then(()=>{
  app.listen(4000)
})
.catch((err)=>{
  console.log(err);
})
//user is extension for every get,pos and deleye request
//nextstep is to make controllers 