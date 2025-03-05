const express = require("express");
const Router1 = require("./api/routes/bank_route");
const UserRouter = require("./api/routes/user_route");
const frontendRouter = require('./html_route');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':false}))


app.use(cors())
app.use("/api/v1/bank", Router1);
app.use("/api/v1/user", UserRouter);


app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200);

  res.statusMessage =
    "Everything good and calm with your request to the server";
  const body = `<h2>API Documentation Available</h2>
          <p>Bank Route for Version 1 is now available for testing </p>
      `;
  res.send(body);
});


//frontend route
app.use(express.static('frontend'))
app.use('/frontend',frontendRouter);

app.listen((PORT = 3000), () => {
  console.log(`server is running on ${PORT} successfully`);
});


mongoose
  .connect("mongodb://127.0.0.1:27017/bankoid", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("connected to database")
    
  }).catch((err) => {
    console.log("error connecting to your database")
  })
