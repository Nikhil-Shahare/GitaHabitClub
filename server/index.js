require("dotenv").config()
const app = require("./app")
const connector = require("./DB/database")
const {PORT} = process.env

// app.use(express.json())
//connection to database
connector();



app.get("/",(req,res)=>{
    res.send("Hare Krishna")
})

app.listen(PORT,(req,res)=>{
 console.log(`server is listening to port ${PORT}`)    
})



