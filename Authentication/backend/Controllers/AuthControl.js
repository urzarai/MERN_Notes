const userModel = require("../Models/User");
const bcrypt = rquire('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async(req, res)=>{
    try{
        const{name, email, password} = req.body;
        const user = await userModel.findOne({email});  //if user already exists
        if(user){
            return res.status(409)
                .json({message: "User already exists, you can login", success: false});
        }
        const UserModel = new UserModel({name, email, password});
        UserModel.password = await bcrypt.hash(password,10);
        await UserModel.save();     //saves signup data in database
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch(err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}

const login = async(req, res)=>{
    try{
        const{email, password} = req.body;
        const user = await userModel.findOne({email});  
        const errorMsg = "Auth failed as email or password is wrong";
        if(!user){
            return res.status(403)
                .json({message: errorMsg, success: false});
        }
        
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual)
        {
            return res.status(403)
                .json({message: errorMsg, success: false});
        }

        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.end.JWT_SECRET,
            {expiresIn:'24h'}
        )

        res.status(20)
            .json({
                message: "Login success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch(err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}

module.exports = {
    signup,
    login
}