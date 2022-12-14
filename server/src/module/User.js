const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isRegister:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
});


const User = mongoose.model('User',UserSchema);

module.exports = User;