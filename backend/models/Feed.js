const mongoose=require('mongoose')

const FeedSchema=new mongoose.Schema({
like:{type :Number},
dislike:{type:Number},
posted_date:{type:Date},
userId: {type:mongoose.Types.ObjectId},
commentId: {type:mongoose.Types.ObjectId},
feed_img:{type:String}
})



module.exports=mongoose.model("Feed",FeedSchema)