import mongoose from "mongoose"



const connection= async(username,password)=>{

    const URL=`mongodb+srv://${username}:${password}@crud-app.tpsyf7y.mongodb.net/`
    try{
       await mongoose.connect( URL,{useUnifiedTopology:true , useNewUrlParser:true});
       console.log("connected successfully with database")
    }catch(error){
         console.log("error while connecting with database",error);
    }
}



export default connection