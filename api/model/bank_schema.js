const mongoose = require('mongoose');
const accountBalanceSchema = new mongoose.Schema({
    accountNumber:{
        type: Number,
        required:true, 
        immutable: true  
    },
    balance:{
        type:Number,
        required:true,
        
    },
    withdrawPin:{
        type:String,
        required:true,    
    },

    createdAt:{
        type:Date,
        default:new Date(),
        immutable: true
    }
})


const BankAccount = mongoose.model('bankaccount',accountBalanceSchema);
module.exports = BankAccount;