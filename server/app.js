const express = require("express")
const app = express();


app.use(express.json())

//cors configuration
const cors = require("cors")
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204, 
};
app.use(cors(corsOptions));

//importing routes

const Blog = require("./routes/blogRoute")

app.use("/api/v1",Blog)



module.exports = app;
