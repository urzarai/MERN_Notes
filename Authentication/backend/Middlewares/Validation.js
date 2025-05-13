const Joi = require('joi');

//Signup Validation Logic
const signupValidation = (req,res,next)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(25).required(),
    });
    const {error} = schema.validate(req.body);
    if(error)
    {
        return res.status(400)
            .json({message: "Bad request", error})
    }
    next();
}

//Login Validation Logic
const loginValidation = (req,res,next)=>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(25).required(),
    });
    const {error} = schema.validate(req.body);
    if(error)
    {
        return res.status(400)
            .json({message: "Bad request", error})
    }
    next();
}

module.exports={
    signupValidation,
    loginValidation
}