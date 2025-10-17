import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

 export const registerUser = async(req,res)=>{
try {
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        return res.status(500).json({message:"enter all fileds"})

    }
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(500).json({message:"user already exist"})
    }

    const hashedPass =await bcrypt.hash(password,10)
    const user =new User({username,email,password:hashedPass});
    await user.save()

    return res.status(200).json({message:"user registerd successfuly",user})
} catch (error) {
    console.log("err while registeriung User",error);
    res.status(500).json({message:"failed to register user"})
    
}
}

export const loginUser = async(req,res)=>{
try {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"enter all feilds to login"})
    }

    const user =await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"no user exist"})
    }
    const passMatched =await bcrypt.compare(password,user.password)
     if (passMatched) {
      return res.status(200).json({ message: "Login successful", user });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }


} catch (error) {
    console.log("theres an error in login user ",error);
    return res.status(500).json({message:"err while login"})
    
    
}
}



