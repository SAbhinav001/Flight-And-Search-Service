const { CityRepository } = require("../repositories");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("went wrong in service....");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("went wrong in service....");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("went wrong in service....");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("went wrong in service....");
      throw { error };
    }
  }

  async getCityAll(filter) {
    try {
      const city = await this.cityRepository.getCityAll({name: filter.name});
      return city;
    } catch (error) {
      console.log("went wrong in service....");
      throw { error };
    }
  }
}

module.exports = CityService;
