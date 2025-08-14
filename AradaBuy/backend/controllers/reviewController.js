const Review=require('../models/Review');

exports.createReview=async(req,res)=>{
    try{
        const {productId,rating,comment}=req.body;
        const userId=req.user.id;
        const newReview= await Review.create({productId,userId,rating,comment});
        res.status(201).json({message:'Review added successfully'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

exports.getReviewByProduct = async(req,res)=>{
    try{
        const{productId}=req.params;
        const reviews=await Review.findAll({where:{productId}});

        res.status(200).json(reviews);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

exports.updateReview=async(req,res)=>{
    try{
        const {id}= req.params;
        const{rating,comment}=req.body;

        const review=await Review.findByPk(id);
        if(!review){return res.status(400).json({message:'Product not found!'})}
        //Updated only if it is the owner
        if(review.userId!==req.user.id){
            return res.status(403).json({error:'Not authorized'})
        }

        review.rating=rating||review.rating;
        review.comment=comment||review.comment;
        await review.save();

        res.status(200).json({message:'Review updated'})
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

exports.deleteReview=async(req,res)=>{
    try{
        const{id}=req.params;
        const review=await Review.findByPk(id);

        if(!review) return res.status(404).json({error:'Review not found'})

        if(review.userId!==req.user.id){
            return res.status(403).json({error:'Not authorized'});
        }   
        await review.destroy();
        res.status(200).json({message:'Review deleted'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};