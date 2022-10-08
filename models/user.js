const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please enter your name?"]
    },
    roll_no:{
        type: Number,
        require: [true, "Please enter your Roll No.?"]
    },
    age:{
        type: Number,
        require: [true, "Please enter your age?"]
    }
});

module.exports = mongoose.model("User", userSchema);