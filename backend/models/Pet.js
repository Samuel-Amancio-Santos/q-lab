import mongoose from "mongoose";

const {Schema} = mongoose; 

const petSchema = new Schema({

        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        weight:{
            type: Number,
            required: true
        },
        color:{
            type: String,
            required: true
        },
        image:{
            type: Array,
            require: true
        },
        available:{
            type: Boolean,
        },
        user: Object,
        
        adopter: Object,
    },

    {timestamps: true} 
    
)

const Pet = mongoose.model('Pet', petSchema);

export {Pet, petSchema};