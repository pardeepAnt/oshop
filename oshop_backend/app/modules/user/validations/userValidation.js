var Joi = require('joi')
var userValidation ={
    login:function(req,res,next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        
        };
    
        Joi.validate(req.params, schema, function (err, value) { 
            if(!err){
                next();
            }else{
                return res.status(400).json(err.details[0].message);
                
            }


        });
    },
    signup:function(req,res,next){
        const schema = {
            fname:Joi.string(),
            lname:Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
            gender:Joi.string()
        };
    
        Joi.validate(req.params, schema, function (err, value) { 
            if(!err){
                next();
            }else{
                return res.status(400).json(err.details[0].message);
                
            }


        });
    }
    

}
module.exports = userValidation