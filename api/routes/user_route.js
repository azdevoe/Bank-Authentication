const express = require("express");


const bankController = require("../controller/bank_controller");



const router = express.Router();

router.get("/", (req, res) => {
  // documention
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    message: "welcome to our user api version 1",
  });
});

// this route will get all users
router.get("/users", async (req, res) => {
  const db_result = await bankController.getAllUser();
  res.setHeader("Content-Type", "application/json");
  if(db_result.error === false){
    res.status(200).json(db_result.data);
  return
  }else{
    res.status(500).json(
      {
        error : await db_result.mesage
      }
    );
    return
  }
});

router.post("/validateusers", async (req, res) => {
const {email,password} = req.body
  const db_result = await bankController.verifyuser(email,password);
  res.setHeader("Content-Type", "application/json");
  if(db_result.error === false){
    if(db_result.data === null){
      res.status(404).json(db_result.message);
      return;
    }
    res.status(200).json({
      message: db_result.message,
      data: db_result.data
    })
    return
  }
  else{
    res.status(404).json(
      {
        error: await db_result.message

      }
    )
    return
  }
});

router.get("/users/:id", async (req, res) => {

  const id = req.params.id

  const db_result = await bankController.getAllUser(id);
  res.setHeader("Content-Type", "application/json");
  if(db_result.error === false){
    res.status(200).json(
      {
        data : db_result.data
      }
    );
  return
  }else{
    res.status(404).json(
      {
        error : await db_result.mesage
      }
    );
    return
  }
});

router.post('/createUser',async (req, res) => {
    
  const {email,password} = req.body
  console.log({email,password});

  const result = await bankController.createUser(email,password);
  res.setHeader('Content-Type', 'application/json');

  if(result.error === true){
    res.status(500).json(result);
    return;
  }else{
    res.status(201).json({
      status : 201,
      message: `user registered successfully with id ${result.id}`,
      'data': result.id
    });
    return;
  }

})



module.exports = router;
