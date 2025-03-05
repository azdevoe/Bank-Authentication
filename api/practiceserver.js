const express = require("express")

const app = express()
const PORT = 2000
const users_balance = [
    {
        "name": "John",
        "account": 37846486557,
        "balance": 7200
    }, 
    {
        "name": "Mary",
        "account": 89284943555,
        "balance": 5000
    },
    {
        "name": "Faith",
        "account": 86837943555,
        "balance": 5800
    },        {
        "name": "John",
        "account": 26637322627,
        "balance": 12003
    }];

    app.use('*', (req, res) => {
        res.send("<h2>My first middle was run for all user</h2>")
    })

    app.use('/home', (req, res) => {
        res.send("<h2>My middle was specified for home page</h2>")
    })

    app.get('/home', (req, res) => {
        res.send("<h2>my home page</h2>")
    })

    app.post('/home', (req, res) => {
        res.send("<h2>my home page</h2>")
    })
// app.get("/", (req, res) => {
//     res.send("<h4>Welcome to the API Class</h4>");
//     console.log("nothing to show")
// })


// app.get("/Account", (req, res) => {
//     res.json([
//         {
//             "name": "John",
//             "account": 37846486557,
//             "balance": 7200
//         }, 
//         {
//             "name": "Mary",
//             "account": 89284943555,
//             "balance": 5000
//         },
//         {
//             "name": "Faith",
//             "account": 86837943555,
//             "balance": 5800
//         },        {
//             "name": "John",
//             "account": 26637322627,
//             "balance": 12003
//         }
//         ])
//         res.end()
//     })

app.listen(PORT, ()=>{
    console.log('SHOW WELL')
})