const express = require("express");
const router = express.Router();

const { FlightMiddlewares } = require("../../middlewares");
const CityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  flightController.create
);
router.get("/flights", flightController.getAll);

router.post("/airports", airportController.create);

module.exports = router;
