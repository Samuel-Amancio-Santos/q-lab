import mongoose from "mongoose";
require("dotenv").config();

const DB_COON = process.env.DB_COON || "insira_a_connection_string_db"

async function main(){

    try {

        mongoose.set("strictQuery", true);
        
        await mongoose.connect(DB_COON);

        console.log("Conectado ao banco!!")

    } catch (error) {
        console.log(error);
    }

}

export default main;