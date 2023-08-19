const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    // {name: "citnam"}
    try {
      const city = await City.create({
        name: name,
      });
      return city;
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }

  async deleteCity(cityID) {
    try {
      await City.destroy({
        where: {
          id: cityID,
        },
      });
      return true;
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    //data is object
    // thrre are many wasy to do this use docs.....
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }
}

module.exports = CityRepository;
