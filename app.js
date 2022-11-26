const path = require('path')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const User = require('./models/User');
// const User2 = require('./models/User2');

const sequelize = require("./utill/database");
const { isErrored } = require('stream');


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

app.get("/user/getUser",async (req,res,next)=>{
  try{
  const users=await User.findAll();
  res.status(200).json(users);
  }catch(err){
    console.log('err getting');
    res.status(500).json({err:err})
  }
})

app.delete("/user/deleteUser/:id",async (req,res,next)=>{
  
  try{
  let userId=req.params.id;
  if(!userId){
    res.status(400).json({err:'Id missing!!'})
  }
  await User.destroy({where:{id:userId}});
  console.log('delete working');

  res.sendStatus(200);
}
catch(err){
  console.log(err)
  res.status(500).json({err:'isErrored deletete section'})
}
})


sequelize.sync()
.then(()=>{
  app.listen(4000)
})
.catch((err)=>{
  console.log(err);
})
//user is extension for every get,pos and deleye request