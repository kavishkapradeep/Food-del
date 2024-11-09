import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";

//app cconfig

const app =express()
const port = 4000;

//db connection 
connectDB();

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")

})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://kavishkapradeep903:<db_password>@cluster0.qpox7.mongodb.net/?