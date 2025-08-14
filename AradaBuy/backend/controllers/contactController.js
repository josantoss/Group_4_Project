const Contact = require("../models/Contact");

exports.submitContactForm =async(req,res)=>{
    try{
        const{name,email,message}=req.body;
        if (!name||!email||!message){
            return res.status(400).json({error:'All fields required'});
        }
        const newContact=await Contact.create({name,email,message})

        res.status(200).json({message:'Form submitted successfully'});
    }catch(error){
        res.status(500).json({error:'Something went wrong'});
    }
};