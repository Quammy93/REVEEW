const express=require("express")
const router=express()

const {createFeed,updateFeed,getAllFeeds,getSingleFeed,deleteFeed}=require("../controllers/feedController")