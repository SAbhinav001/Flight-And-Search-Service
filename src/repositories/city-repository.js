const { City } = require("../models/index");
const {Op} = require("sequelize")

class CityRepository {
  async createCity({ name }) {
    // {name: "cityname"}
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
    // the belpw approach  works but will not return updated object, so we can use second way (below one without comment)
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
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

  async getCityAll(filter) {    //filter can be empty...then return all city
    try {
      if(filter.name)
      {
        const cities = await City.findAll({
          where:{
            name:{
              [Op.startsWith]: filter.name 
            }
          }
        })
        return cities;
      }
      else{
        const city = await City.findAll();
      return city;
      }
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }
}

module.exports = CityRepository;
