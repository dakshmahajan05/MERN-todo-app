import User from "../models/user.model.js";

 const registerUser = async(req,res)=>{
try {
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        return res.status(500).json({message:"enter all fileds"})

    }
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(500).json({message:"user already exist"})
    }

    const user =new User({username,email,password});
    await user.save()

    return res.status(200).json({message:"user registerd successfuly",user})
} catch (error) {
    console.log("err while registeriung User",error);
    res.status(500).json({message:"failed to register user"})
    
}
}

export default registerUser

