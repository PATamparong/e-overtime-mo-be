const express = require("express");

const app = express(),
  bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

// // index route
app.get("/", (request, response) => {
  response.render("index");
});

//import model
require("./model/index");

// import route
require("./router/employee")(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port localhost:${PORT}`);
});
