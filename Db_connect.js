const mongoose=require("mongoose");
const DbConnect=async()=>{
try {
    let result=mongoose.connect(process.env.DB_URI);
    console.log("database is connected")
} catch (error) {
console.log(error);
}
}


module.exports=DbConnect;