
import Reply from "../models/reply.models.js";

export const newReply = async (request, response) => {
    try {
        const reply = await new Reply(request.body);
        reply.save();

        response.status(200).json('Reply sent successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllReplies = async (request, response) => {
    try {
        const { id } = request.query;  // Get 'id' from query params
      
        if (!id) {
            return response.status(400).json({ message: 'Ride ID is missing' });
        }
        const replies = await Reply.find({ rideId: id });
        
        response.status(200).json(replies);
    } catch (error) {
        response.status(500).json(error);
    }
};
export const deleteReply = async (request, response) => {
    try {
         const { id } = request.body; // Get 'id' from query params
      
        if (!id) {
            return response.status(400).json({ message: 'Ride ID is missing' });
        }

        const reply = await Reply.findById(id);
        await reply.deleteOne()

        response.status(200).json('Reply deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
export const updateReply = async (request, response) => {
    try {
     
        const { id } = request.body; // Get 'id' from query params
      
        if (!id) {
            return response.status(400).json({ message: 'Ride ID is missing' });
        }

        const reply = await Reply.findById(id);  
       
        if (!reply) {
            return response.status(404).json({ msg: 'Reply not found' });
        }
        
        const updatedReply = await Reply.findByIdAndUpdate(id, { text : request.body.text }, { new: true });
        // $addtoset hota hai append karne ke liye
      response.status(200).json(updatedReply);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  export const getReplies = async (request, response) => {
    try {
        const replies = await Reply.find({  });
        
        response.status(200).json(replies);
    } catch (error) {
        response.status(500).json(error);
    }
};