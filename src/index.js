const express = require("express");
const { ServerConfig, Logger } = require("./config");
const ApiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const app = express();
const { Airport, City } = require("./models");
const db = require("./models");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/flightsearchservice/api", ApiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`server started at port ${ServerConfig.PORT}`);

  //DO the sync once after creating model and association
  //first add env var.
  if (process.env.SYNC_DB) {
    db.sequelize.sync({ alter: true });
  }
});
