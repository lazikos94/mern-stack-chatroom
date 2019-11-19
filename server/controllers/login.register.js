const {Register,Messages} = require('../models/mongoose_model')
const bcrypt = require('bcrypt');

registerUser= async (req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error:'You must provide data'
        })
    }
    const data = new Register(body);
    if(!data){
        return res.status(400).json({
            success:false,
            error: err
        })
    }
    try{
        const newData = await data.save();

        return res.status(201).json({
            data: newData,
            success:true,
            message:'User added'
        })
    }
    catch(error){
        console.log(error);
        return  res.status(400).json({
                error,
                message:'Data not added'
        })
    }

}

loginUser=async(req,res)=>{
    const body= req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error:'No login data'
        })
    }
    let user = await Register.findOne({username:body.username},function(err,user){
        if (err){
            return res.status(400).json({
                success:false,
                error:err
            })
        }
        if(!user){
            return res.status(404).json({
                success:false,
                error: 'User not found'
            })
        }
        bcrypt.compare(body.password,user.password,function(err,isMatch){
            if(err) return cb(err)
            let login=false;
            if (isMatch===true){
                let login=true;
                res.send(login);
            }else{
                res.send(login)
            }
        })
    })

}

getDataFromId = async(req,res)=>{
    try{
        let one_data = await Register.findOne({username:req.params.username},(err)=>{
           if (err){
               return res.status(400).json({
                   success:false,
                   error:err
               })
           }
        }) 
        return res.send(one_data)
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error:error,
            message:'Could not find'
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    getDataFromId
}