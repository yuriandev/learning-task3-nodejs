const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRoutes);
app.use(usersRoutes);
app.use((req, res, next) => {
  res.status("404").sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
