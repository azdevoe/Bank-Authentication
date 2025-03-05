
const BankAccount = require("../model/bank_schema");
const UserAccount = require('../model/user_schema');

const bcrypt = require('bcrypt')

async function createAccount(balance, withdraw_pin) {
  
    try {
        const account = await BankAccount.create({
            accountNumber: generateAccountNumber(),
            balance: balance,
            withdrawPin: withdraw_pin,
        })

        console.log('account created successfully')
        return {
            error : false,
            data : account
        }
   
    }catch (err) {
    
        console.log('error occurred')

        return {
            error : true,
            message : err.message
        }
    }
}

async function getAllAccountNumber() {
  try {  
    let acct_number = await BankAccount.find({});
    return {
        error : false,
        data : acct_number
    }   
  }catch(err) {
    return {
        error : true,
        message : err.message
    }
  }
}

// async function depositToAccount(){

// }

function generateAccountNumber() {
  let result = "54";
  const randoms = "0123456789";
  for (let i = 0; i < 8; i++) {
    const index = Math.floor(Math.random() * randoms.length);
    result += randoms[index];
  }
  return Number(result);
}

async function createUser(email,password){
    //
    try {
      const hashed_pass = bcrypt.hashSync(password, 10)

      const user = await UserAccount.create({
        email:email, 
        password: hashed_pass
      })
      console.log('account created successfully')

      return {
          error: false,
          id : user._id
      }

    } catch(error) {
      console.log('error occurred at bankController createUser')
       return {
          'error':true,
          message : error.message
       }
    }
   
   
}

async function getAllUser(id = undefined){
  try {
    let user = id === undefined ? await UserAccount.find({}) : await UserAccount.find({_id:id});
    return {
      error: false,
      data : user
    }
  } catch (error) {
    return {
      error: true,
      mesage : error.message 
    }
  }
}








async function verifyuser(email, password){
  try {
    let user = await UserAccount.findOne({'email': email})
    console.log(user);
    if(user === undefined || user === null){
      return{
        message: 'user not found. please do ensure you are registerer with a valid email address',
        data: null,
        error: false
      }
    }


    // verify password
    const isValid = await crypto.compare(password, user.password)
    if(isValid){
      return{
        message: `login sucessful`,
        data:{
            first_name: user.firstName,
            last_name: user.lastName,
            id: user._id
        },
        error: false
      }
    }


    //when user password is incorrect
    return{
      message: `login incorrect`,
      data: null,
      error: false
    }
  } catch (error) {
    return {
      error: true,
      mesage : error.message 
    }
  }
}


exports.getAllAccountNumber = getAllAccountNumber;
exports.createAccount = createAccount;
exports.createUser = createUser;
exports.getAllUser = getAllUser;
exports.getAllUser = getAllUser;
exports.verifyuser = verifyuser;