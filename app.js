const path = require('path')
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const User = require('./models/User');
const sequelize = require("./utill/database")
const port = 4000;


app.post("/user/addUser", async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;

  const data = await User.create({
    name: name,
    email: email,
    phoneNo: phoneNo
  });
  res.status(201).json({
    newUserDetail: data
  });
});



sequelize.sync()
.then(()=>{
  app.listen(port)
})
.catch((err)=>{
  console.log(err);
})
