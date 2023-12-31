const {clientErrorCodes}  =require("../utils/error-code")
const validateCreateFlight = (req, res,next)=>{
            if(
                !req.body.flightNumber ||
                !req.body.airplaneId ||
                !req.body.departureAirportId ||
                !req.body.ArrivalAirportId ||
                !req.body.arrivalTime ||
                !req.body.departureTime ||
                !req.body.price 
            ){
                return res.status(clientErrorCodes.BAD_REQUEST).json({
                    data:{},
                    err: "Missing Mandatory Fields",
                    message: "Invalid request body",
                    success:false,
                })

            }
            next();
}

module.exports = {
    validateCreateFlight
}