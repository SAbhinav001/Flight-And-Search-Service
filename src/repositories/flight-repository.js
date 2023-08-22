const { Flights } = require("../models");
const {Op} = require("sequelize")

class FlightRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        } 
    
        let priceFilter =[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}})      
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice}})      
        }
        Object.assign(filter, {[Op.and]: priceFilter})
        return filter
    }

  async createflight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }
  async getflight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }
  async getAllflight(filter) {
    try {
        const filterObject = this.#createFilter(filter)
        const flight = await Flights.findAll({
            where: filterObject
        })
        return flight
      
    } catch (error) {
      console.log("went wrong in repo....");
      throw { error };
    }
  }
}

module.exports = FlightRepository;


/**
 *   where:{
 *          arriavlAirportId: 2.
 *             departureAirportId: 4,
 *          price : {[op.gte]: 4000}
 * 
 * }
 */
