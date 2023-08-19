const { CityService } = require("../services");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      message: "city created successfully",
      data: city,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: "not able to create a city",
    });
  }
};

// delete -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      message: "city deleted successfully",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: "not able to delete a city",
    });
  }
};

// PATCH -> /city/:id  -> req.body
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      message: "city update successfully",
      data: city,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: "not able to update a city",
    });
  }
};

// GET -> /city/:id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      message: "city fetch successfully",
      data: city,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: "not able to get a city",
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
