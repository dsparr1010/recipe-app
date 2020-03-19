const express = require("express");
const path = require("path");
const morgan = require("morgan");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
console.log(`🌎 ==> API server now on port ${PORT}!`);
});