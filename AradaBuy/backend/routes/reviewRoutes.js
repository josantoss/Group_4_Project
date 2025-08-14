const express=require('express');
const router=express.Router();
const reviewController=require('../controllers/reviewController');

router.post('/',reviewController.createReview);
router.get('/',reviewController.getReviewByProduct);
router.put('/',reviewController.updateReview);
router.delete('/',reviewController.deleteReview);

module.exports=router;