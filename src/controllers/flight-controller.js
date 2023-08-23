const {FlightService} =require("../services")

const flightService = new FlightService()

const create = async(req,res)=>{
    try{
        //we need to only send specific data to service layer not all
        let flightRequestData = {
                flightNumber: req.body.flightNumber,
                airplaneId : req.body.airplaneId,
                departureAirportId: req.body.departureAirportId,
                arrivalAirportId: req.body.arrivalAirportId,
                arrivalTime: req.body.arrivalTime,
                departureTime: req.body.departureTime,
                price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData)
        return res.status(201).json({
            success:true,
            message:"successfully created the flight",
            data:flight,     
            err:{},
            
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
          data: {},
          err: error,
          success: false,
          message: "not able to create a city",
        });

    }
}

const getAll = async(req,res)=>{
    try{
        const response =await flightService.getAllFlight(req.query)
        return res.status(201).json({
            success:true,
            message:"successfully fetched the flight",
            data:response,     
            err:{},
            
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
          data: {},
          err: error,
          success: false,
          message: "not able to fetch a flight",
        });

    }
}

module.exports={
    create,
    getAll,
}