import mongoose , {Schema} from "mongoose" ;

const userSchema = new Schema({
    username :{
        type : String ,
        required : true ,
    },
    email:{
        type: String ,
        required : true ,
        unique : true , 
    },
    photoURL: {
        type : String ,
    }

} , {timestamps : true});
const GoogleUser = mongoose.model("GogleUser" ,userSchema)
export default GoogleUser ;
