import mongoose from "mongoose";

async function main(){

    try {

        mongoose.set("strictQuery", true);
        
        await mongoose.connect("mongodb+srv://Pedro:nQMeNoE2PQtglE7p@cluster0.9a4zdvt.mongodb.net/?retryWrites=true&w=majority");

        console.log("Conectado ao banco!!")

    } catch (error) {
        console.log(error);
    }

}

export default main;