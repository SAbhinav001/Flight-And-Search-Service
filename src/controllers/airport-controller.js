const {AirportService} =require("../services")

const airportService = new AirportService()

const create = async(req,res)=>{
    try{
        const response = await airportService.create(req.body)
        return res.status(201).json({
            message: "airport created successfully",
            data: response,
            success: true,
            err: {},
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
          data: {},
          err: error,
          success: false,
          message: "not able to create a airport",
        });
    }

}

module.exports={
    create,
}
