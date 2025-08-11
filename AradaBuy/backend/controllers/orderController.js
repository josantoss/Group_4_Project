const Order = require('../models/Order')//Create new Order
exports.createOrder = async(req,res)=>{
    try{
        const{userId,products,total} = req.body;
        const newOrder = await Order.create({userId,products,total})
        res.status(201).json(newOrder);
    }catch(error){
        res.status(400).json({error:error.message})
    }
};
//Get user Order
exports.getUserOrders=async(req,res)=>{
    try{
        const orders =await Order.findAll({where:{userId:req.user.id}});
        res.json(orders);
    }catch(error){
        res.status(500).json({error:'Something went wrong'});
    }
};
//Admin: get all orders
exports.getAllOrders=async(req,res)=>{
    try{
        const orders=await Order.findAll();
        res.json(orders);
    }catch{
        res.status(500).json({error:'Server error'});
    }
};
//Admin: Update order
exports.updateOrderStatus = async(req,res)=>{
    try{
        const order = await Order.findByPk(req.params.id);
        if(!order) return res.status(404).json({error:'Order not found'});

        await order.update({status:req.body.status});
        res.json(order);
    }catch(error){
        res.status(500).json({error:'Server error'})
    }
};