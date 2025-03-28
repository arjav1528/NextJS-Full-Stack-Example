import { connection } from "mongoose";

const mongoose = require('mongoose');

const dbConfig = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        const result = await mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to database");
            process.exit(0);
        });

        connection.on("error", (err: any) => {
            console.error("Error in dbConfig", err);
            process.exit(1);
        });


        
    }catch(err){
        console.error("Error in dbConfig", err);
    }
}