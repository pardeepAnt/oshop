var models  = require('../../../../models')
var jwt = require('jsonwebtoken')
var userContoller ={
   login:function(req,res,next){
    let email = req.body.email
    let password = req.body.password
    models.User.findOne({
        where:{

            email:email,
            password:password
        }    
    }).then(data=>{
        if(!data || data == null){
            return res.status(200).json("Please check data this email not registered with us");
        }else{
           
            const token = jwt.sign({'id':data.id,'firstName':data.firstName,'isAdmin':data.isAdmin},'O$hop', {
            });
            userData = { email : data.email,firstName : data.firstName}
            let send_data = {success:true,status:400,message:"user logged in successfully",token:token,data:userData};
            return res.json(send_data);
        }
    })
   } ,
   signup:function(req,res,next){
        models.User.create({ firstName: req.body.fname,lastName:req.body.lname,email:req.body.email,password:req.body.password}).then(data=>{
            if(!data || data == null){
                return res.status(200).json("Some error occur,Please try again later");
            }else{
                
                return res.status(200).json({'done':true});
            }
        })
}
}

module.exports = userContoller