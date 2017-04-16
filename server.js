const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require("./routes/index");
const color = require("./routes/color");

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", index);
app.use("/color", color);

app.listen(3000, () => {
  console.log(`Server listened!`);
})
