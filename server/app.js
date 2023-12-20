const express = require("express")
const app = express();


app.use(express.json())


//importing routes

const Blog = require("./routes/blogRoute")

app.use("/api/v1",Blog)



module.exports = app;
