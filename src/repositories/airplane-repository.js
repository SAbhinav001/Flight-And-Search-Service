const {Airplane} = require("../models")

class AirplaneRepository{
    async getAirplane(id){
        try{
            const airplane = await Airplane.findByPk(id)
            return airplane
        }catch(error){
            console.log("went wrong in service....");
            throw { error };
        }

    }
}

module.exports =AirplaneRepository;