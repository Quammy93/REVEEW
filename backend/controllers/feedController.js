const createFeed=(req,res)=>{

    req.status(200).json('Creating feed')
}

const getSingleFeed=(req,res)=>{

    req.status(200).json('get single feed')
}

const getAllFeeds=(req,res)=>{

    req.status(200).json('getting all feeds')
}
const updateFeed=(req,res)=>{

    req.status(200).json('úpdating feed')
}
const deleteFeed=(req,res)=>{

    req.status(200).json('deleting feed')
}


module.exports={getAllFeeds,getSingleFeed,updateFeed,createFeed,deleteFeed}