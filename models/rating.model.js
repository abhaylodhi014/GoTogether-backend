import mongoose , {Schema} from "mongoose" ;

const RatingSchema = new Schema({
    ratedUser :{
        type : String ,
        required : true ,
    },
    ratedBy:{
        type : String ,
        required : true ,
    },

    rating :{
          type : Number ,
          required : true ,
   },

   
   
    

} , {timestamps : true});
const Rating = mongoose.model("Rating" ,RatingSchema)
export default Rating ;