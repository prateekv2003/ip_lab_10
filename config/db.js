const mongoose = require('mongoose');

const connectDB=()=>{
    mongoose
        .connect('mongodb://localhost:27017/ip_lab_10',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(()=>{console.log("Database Connected successfully!")})
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = connectDB;