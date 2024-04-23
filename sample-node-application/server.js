const express = require("express");
const data = require("./data.json");
const swStats = require("swagger-stats");
// const apiSpec = require('swagger.json');

const app = express();

// displayed at path: /swagger-stats/metrics
app.use(swStats.getMiddleware());

app.get("/", (req, res) => {
    res.send("Hello, Welcome to the Node App")
})

app.get("/data", (req, res) => {
    res.json(data)
})


app.listen(8000, () => {
    console.log("App is running")
});
