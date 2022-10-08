const app = require("express")();
const bodyParser = require("body-parser")
const userRoutes = require("./routes/user")
const connectDB = require('./config/db')

connectDB();
app.use(bodyParser.json());

app.listen(3001, ()=>console.log("server started at localhost:3001"))

app.get("/",(req, res, next)=>{
    res.send("Hello World!");
    res.end();
})

app.use("/user",userRoutes);