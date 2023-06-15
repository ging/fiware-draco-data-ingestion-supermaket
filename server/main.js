const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const realTimeDataSource = require ("./realTimeDataSource")
const restDataSource = require ("./restDataSource")

const DRACO_URI = process.env.URL_DRACO || "http://localhost:5050";
const URL_CB = process.env.URL_CB || "http://localhost:1027";

const PORT = process.env.PORT ? process.env.PORT : 3001;

const DRACO_POST = `${DRACO_URI}/updateJSON`;
const URL_CB_GET = `${URL_CB}/ngsi-ld/v1/entities/?type=Supermarket`;


const updateJSONEntity = (data) => {
  fetch(DRACO_POST, {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then((res) => {})
    .catch((e) => {
      console.error(e);
      console.log("Update error");
    });
};

const updateStatusSupermarketJSON = () => {
  try {
    const JSONEntity = realTimeDataSource.generateJSONEntity()
    updateJSONEntity(JSONEntity);
    setTimeout(() => {updateStatusSupermarketJSON()}, 10000);
  } catch (err) {
    console.log("Error while updating the entity");
    console.error(err);
    setTimeout(() => {updateStatusSupermarketJSON()}, 10000);
  }
};

updateStatusSupermarketJSON();

server.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});

app.use(bodyParser.text());
app.use(bodyParser.json());


app.get("/jsonEntities", (req, res) => {
  try {
    const JSONEntities = restDataSource.generateJSONEntities(restDataSource.superMarketsJSONEntities)
    res.send(JSONEntities)
  }
  catch(error){
    console.error(error)
    res.status(500);
    res.send("Error in server")
  }
});


app.get("/entities", (req, res) => {
  fetch(URL_CB_GET, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data)
    })
    .catch((e) => {
      console.error(e);
      console.log("Update error");
      res.status(500);
      res.send("Error in server");
    });
});
