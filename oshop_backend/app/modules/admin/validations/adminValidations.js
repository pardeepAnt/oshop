var Joi = require('joi')
var adminValidation = {
    addproduct:function(req,res,next){
        const schema = {
            title: Joi.string(),
            price: Joi.number(),
            category:Joi.string(),
            image:Joi.string()
        
        };
    
        Joi.validate(req.params, schema, function (err, value) { 
            if(!err){
                next();
            }else{
                return res.status(400).json(err.details[0].message);
                
            }
        })

    }
}
module.exports =adminValidation