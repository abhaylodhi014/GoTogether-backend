import mongoose , {Schema} from "mongoose" ;


const userSchema = new Schema({
    username :{
        type : String ,
        required : true ,
  
      
    },
    
arrivalDate:{
    type : Date ,
},
arrivalTime : {
    type : String ,
},
    vehicleName : { 
        type : String ,
    },
    startPoint : {
        type : String ,
        required : true,
    },
    destination : {
         type:String ,
    },
    timeRanges : {
           type : String,
    },
    departureDate:{
        type : Date ,
    },
    departureTime:{
        type : String ,
    },
    totalSeats : {
        type : Number ,
    },
    availableSeats : {
        type : Number ,
    },
    price : {
        type : Number ,
    },
    sharingPrice : {
        type : Number,
    },
    vehicleDescription : {
        type : String ,
    }
 

} , {timestamps : true});
const Rides = mongoose.model("Rides" ,userSchema)
export default Rides ;