require("dotenv").config()
const app = require("./app")
const connector = require("./DB/database")
const {PORT} = process.env

// app.use(express.json())
//connection to database
connector();

//cors configuration
const cors = require("cors")
const corsOptions = {
    origin: ['http://localhost:5173', 'https://gita-habit-club-frontend-nikhil-shahare.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204, 
};
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send("Hare Krishna")
})

app.listen(PORT,(req,res)=>{
 console.log(`server is listening to port ${PORT}`)    
})



