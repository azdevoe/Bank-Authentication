const users_balance = [
    {
      name: "John",
      account: "Guarantee Trust Bank",
      balance: 20000,
    },
    {
      name: "Lesous",
      account: "First Bank",
      balance: 28000,
    },
    {
      name: "Zeun",
      account: "First Bank",
      balance: 32000,
    },
    {
      name: "Abdulazeez",
      account: "Zenith Bank",
      balance: 21400,
    },
    {
      name: "Oluwaseun",
      account: "Guarantee Trust Bank",
      balance: 95000,
    },
  ];
  
  // app.use("*", (req, res) => {
  //   res.send("my first middle ware that runs for all users");
  // });
  
  // app.use("/home", (req, res) => {
  //   res.send("my middle ware specifically for /home page");
  // });
  
  app.get("/home", (req, res) => {
    res.send("<h2>my home page get method</h2>");
  });
  app.post("/home", (req, res) => {
    res.send("my post home page url");
  });
  app.put("/home", (req, res) => {
    res.send("<h2>my home put method</h2>");
  });
  app.delete("/home", (req, res) => {
    res.send("<h4>my home page delete url</h4>");
  });
  app.patch("/home", (req, res) => {
    res.send("<p>my home page patch url</p>");
  });
  app.get("/", (req, res) => {
    res.statusCode = 200;
    res.send("<h2>Introductory Page </h2>");
  });
  app.get("/accounts", (req, res) => {
    res.json(users_balance);
    res.end();
  });