console.log("Server is starting...");
var express = require("express");
var app = express();

const routes = require("./routes");

app.use("/api", routes);

app.listen(3000);
