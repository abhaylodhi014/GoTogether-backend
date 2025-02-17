import mongoose , {Schema} from "mongoose" ;

const userSchema = new Schema({
    sender: { 
        type: String,
         required: true 
        },
    receiver : {
        type : String ,
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
const Chat = mongoose.model("Chat" ,userSchema)
export default Chat ;