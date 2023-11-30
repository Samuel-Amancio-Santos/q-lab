import mongoose from "mongoose";

const {Schema} = mongoose; 

const newsletterSchema = new Schema({

        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }, 
    {timestamps: true} 
)

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

export {Newsletter, newsletterSchema};