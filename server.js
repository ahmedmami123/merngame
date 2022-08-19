const express=require("express");
const cors=require("cors");
const app=express();
const DbConnect=require("./Db_connect")

require("dotenv").config()
DbConnect();
app.use(express.json());
app.use(cors());
app.use("/game",require("./routes/gameRouter"))
app.listen(process.env.PORT,(err)=>{
    err ? console.log(err):console.log("server is running")
})
