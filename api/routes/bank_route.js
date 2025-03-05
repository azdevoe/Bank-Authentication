const express = require("express");


const bankController = require("../controller/bank_controller");


const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    message: "welcome to our bank api version 1",
  });
});

router.get('/accounts',async (req, res) => {
  const result = await bankController.getAllAccountNumber();
  res.setHeader('Content-Type', 'application/json');

  if(result.error === true){
    res.status(500).json(result);
    return;
  }else{
    res.status(200).json({
      status : 200,
      message: 'db query successfull',
      'data': result.data
    });
    return;
  }

})

router.post('/account',(req, res) => {
  //bankController.createAccount()
});
module.exports = router;
