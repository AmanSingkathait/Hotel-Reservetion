const jwt = require("jsonwebtoken");
const createError = require("../Utils/error");

const verfyToken = (req,res,next)=>{
    const token = req.cookies.cookie_token;
    if(!token){
        return next(createError(401,"UnAuthanticate user"))
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(createError(403,"invalid Token"));
        req.user = user;
        next();
    });
}

const verfyUser = (req,res,next)=>{
    verfyToken(req,res,()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(401,"UnAuthanticate user"))
        }
    })
}

const verifyAdmin = (req,res,next)=>{
    verfyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(401,"unAuthanticated user Admin "))
        }
    })
}

module.exports = {
    verfyToken,
    verfyUser,
    verifyAdmin,
};