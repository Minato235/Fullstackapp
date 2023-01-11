// 1st import express and router and 2nd chnage it to router instead of app

const express=require("express");
const userController=require("../controllers/userController");
const router=express.Router();



router.post("/addUser",userController.addUser);
  
  router.get("/getUser",userController.getUser);
  
  router.delete("/deleteUser/:id",userController.deleteUser);
  
  //export the router
  module.exports=router;