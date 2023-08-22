const {FlightService} =require("../services")

const flightService = new FlightService()

const create = async(req,res)=>{
    try{
        const flight = await flightService.createFlight(req.body)
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