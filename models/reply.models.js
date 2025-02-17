import mongoose , {Schema} from "mongoose" ;

const userSchema = new Schema({
    username : {
        type : String ,
        required : true,
    },
    sender: { 
        type: String,
         required: true 
        },
    receiver : {
        type : String ,
    },
    rideId: {
        type : String ,
        required : true ,
    },
    date : {
        type : String ,
        required : true ,
    },
    text : {
        type : String ,
        required : true ,
    },
   
} , {timestamps : true});
const Reply = mongoose.model("Reply" ,userSchema)
export default Reply ;