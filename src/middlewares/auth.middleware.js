const jwt=require("jsonwebtoken");

async function authArtist(req,res,next){
    const token=req.cookies.token;
    if(!token){
         return res.status(401).json({msg:"UnAuthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role!=="artist"){
            return res.status(403).json({msg:"u don't have access"});
        }
        req.user=decoded;
        next();

    }catch(err){
        console.log(err)
        return res.status(401).json({msg:"UnAuthorized "})
    }
}

async function authUser(req,res,next){
    const token=req.cookies.token;

    if(!token){
        res.status(401).json({message:"UnAuthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role!=="user" ){
            //as because anyone can fetch all the music like if he is user or artist..but say only user can fetch all
            return res.status(403).json({message:"You don't have access"})
        }
        req.user=decoded;
        next()
    }catch(err){
        console.log(err);
        return res.status(401).json({msg:"unAuthorized"})
    }
}

module.exports={authArtist,authUser};

//middleware can read the request,can modify the request
//also able to send the response of the request

//so as In music.Controller we have used the decode we'll add a property like req.user=decoded..so In code we can use this code in place of that