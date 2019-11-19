const {Register,Messages} = require('../models/mongoose_model')

getAllUsers= async (req,res)=>{
    try{
        let data = await Register.find({},(err)=>{
            if(err){
                return res.status(400).json({
                    success:false,
                    error:err
                })
            }
        })
        return res.send(data)
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error:error,
            message:'Could not find'
        })
    }
}
getMessages = async(req,res)=>{
    try{
        let data = await Messages.find({},(err)=>{
            if (err){
                return res.status(400).json({
                    success:false,
                    error:err
                })
            }
        })
        return res.send(data);
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error:error,
            message:'Could not find'
        })
    }
}
saveMessages= async (req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error:'You must provide data'
        })
    }
    const data = new Messages(body);
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
/*updateData = async (req,res)=>{
    const body = req.body;
    if(!body){
        return res.status(400).json({
            success:false,
            error:'You must provide data to update'
        })
    }
    Data.findOne({"_id":req.params.id},async (err,data)=>{
        if(err){
            return res.status(404).json({
                err,
                message: 'Data not found!'
            })
        }
        data.username = body.username;
        data.age = body.age;
        data.job = body.job;
        data.description = body.description;
        try{
            let newData = await data.save();

            return res.status(201).json({
                data: newData,
                success:true,
                message:'Data updated'
            })
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error:error,
                message:'Data not added'
            })
        }
    });
}

deleteData = async(req,res)=>{
    try{
        let deletedata = await Data.findByIdAndDelete({_id:req.params.id},(err,data)=>{
            if (err){
                return res.status(400).json({
                    success:false,
                    error:err
                })
            }
            if(!data){
                return res.status(404).json({
                    success:false,
                    error: 'Data not found'
                })
            }
        })
        return res.status(200).json({
            success:true,
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error:error,
            message:'Could not delete'
        })
    }
}}


getUserData = async(req,res)=>{
    try{
        let one_data = await Data.findOne({_id:req.params.id},(err)=>{
           if (err){
               return res.status(400).json({
                   success:false,
                   error:err
               })
           }
        }) 
        return res.status(200).json({
            success:true,
            data:one_data
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error:error,
            message:'Could not find'
        })
    }
}
*/
module.exports = {getAllUsers,saveMessages,getMessages}
