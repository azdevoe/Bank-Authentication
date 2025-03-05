const express = require('express');
const path = require('path')
const frontendRoute = express.Router();

frontendRoute.get('/' , (req , res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','html','index.html'));
    console.log('file sent');
    return
});

frontendRoute.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'frontend','html','login.html'));
    return;
})

frontendRoute.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'frontend','html','register.html'));
    return;
})

module.exports = frontendRoute