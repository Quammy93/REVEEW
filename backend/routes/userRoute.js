const express=require("express")
const router=express.Router()


const {getAllUsers,getSingleUser,showCurrentUser,deleteUser,updateUser}=require("../controllers/userController")