var models = require('../../../../models')
var adminController={
    addproduct:function(req,res,param){
        models.products.create({
            'title':req.body.title,
            'price':req.body.price,
            'category':req.body.category,
            'imageUrl':req.body.image

        }).then(data=>{
            status={
                saved:1
            }
            res.status(200).json(status);
        }).catch(function (err) {
            status={
                saved:0,error:err
            }
            res.status(400).json(status);
          });
    },
    list:function(req,res,next){
        models.products.findAll().then(data=>{
            res.status(200).json(data)
        }).catch(function(err){
           res.status(400).json(err) 
        });
    },
    getbyId:function(req,res,next){
        models.products.findOne({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.status(200).json(data)
        }).catch(function(err){
            res.status(400).json(err) 
        })
    },
    updateproduct:function(req,res,param){

        models.products.findOne({
            where:{
                id:req.body.id
            }
        }).then(data=>{
            data.title=req.body.title,
            data.price=req.body.price,
            data.category=req.body.category,
            data.imageUrl=req.body.image
            data.save().then(data=>{
                status={
                    saved:1
                }
                res.status(200).json(status);
            }).catch(function(err){
                status={
                    saved:0,error:err
                }
                res.status(400).json(status);  
            });
        }).catch(function (err) {
            status={
                saved:0,error:err
            }
            res.status(400).json(status);
          });
    },
    deleteProduct:function(req,res,next){
        id = req.params.id;
        models.products.findOne({
            where:{
                id:id
            }
        }).then(data=>{
            data.destroy().then();
            status={
                saved:1
            }
            res.status(200).json(status);
        })
    }

}
module.exports = adminController