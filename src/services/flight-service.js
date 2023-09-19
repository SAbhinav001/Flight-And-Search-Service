const {FlightRepository, AirplaneRepository} = require("../repositories")

const {comparetime} = require("../utils/helper")


class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository()
        this.flightRepository = new FlightRepository()
    }
    async createFlight(data){
        try{
                if(!comparetime(data.arrivalTime,data.departureTime)){
                    throw {error : "Arrival time must be greater than departure"}
                }
                const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
                const flight = await this.flightRepository.createflight({...data, totalSeats:airplane.capacity})
                return flight
        }catch(error){
            console.log("went wrong in service....");
            throw { error };
        }
    }

    async getAllFlight(data){
        try{
            const flights =await this.flightRepository.getAllflight(data)
            return flights
        }catch(error){
            console.log("went wrong in service....");
            throw { error };
        }
    }

    async getFlight(flightId){
        try{
            const flight =await this.flightRepository.getflight(flightId)
            return flight
        }catch(error){
            console.log("went wrong in service....");
            throw { error };
        }
    }

    async updateFlight(flightId,data){
        try{
            const response =await this.flightRepository.updateFlight(flightId,data)
            return response
        }catch(error){
            console.log("went wrong in service....");
            throw { error };
        }
    }
}

module.exports =FlightService;

/**
 * {
 * flightnumber,
 * airplaneid,
 * deptAirportId,
 * arriavlAirpirtId,
 * arriavltime,
 * depttime,
 * proce,
 * totalseats->(we get this from airplane repos)
 * }
 */