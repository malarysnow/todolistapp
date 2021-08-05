const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`);

const app = express();
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//Set view engine to EJS
app.set("view engine", "ejs");

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});

app.get("/", function (req, res) {
  //Use .getDay() or .getDate()
  const day = date.getDay();
  res.render("list", { listTitle: day, items: items });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work To Do", items: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work To Do") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", function (req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});