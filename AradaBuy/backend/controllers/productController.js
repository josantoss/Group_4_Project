const Product = require('../models/product');//Get product
exports.getAllProducts = async(req,res)=>{
    try{
        const products = await Product.findAll();//get from DB
        res.json(products)//Send to frontend
    } catch(error){
        res.status(500).json({error:'Something went wrong'});
    }
};
//Get product by ID
exports.getProductById=async(req,res)=>{
    try{
        const product = await Product.findByPk(req.params.id);
        if(!product) return res.status(404).json({error:'Product not found'});
        res.json(product);
    } catch(error){
        res.status(500).json({error:'Server error'});
    }
};
//Create a product
exports.createProduct =async(req,res)=>{
    try{
        const { name,price,description }=req.body;
        const newProduct = await Product.create({name,price,description});
        res.status(201).json(newProduct)
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
//Update product
exports.updateProduct = async(req,res)=>{
    try{
       const product = await Product.findByPk(req.params.id)//find the product by id
       if (!product) return res.status(404).json({error:'Product not found'})

        const{name,price,description}=req.body;
        await product.update({name,price,description});
        res.json(product);
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
//Delete product
exports.deleteProduct = async(req,res)=>{
    try{
        const product= await Product.findByPk(req.params.id)
        if(!product) return res.status(404).json({error:'Product not found'})
          
         await product.destroy();
         res.json({message:'Product deleted'});   
    }catch(error){
        res.status(500).json({error:'Server error'});
    }
};
