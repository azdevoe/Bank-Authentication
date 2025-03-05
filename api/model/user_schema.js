const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true, 
        unique : true
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,    
    },
    lastName:{
        type:mongoose.Schema.Types.String
    },
    bankAccountId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bankaccount' // name of model to reference
    },
    registeredAt:{
        type:Date,
        default:new Date(),
        immutable: true
    }
})


const User = mongoose.model('user',userSchema);
module.exports = User;