
import Rides from '../models/rides.models.js';


export const createRide = async (request, response) => {
    try {

        const Ride = await new Rides( request.body );
        Ride.save();
           
       return response.status(200).json('Ride upload successfully');
    } catch (error) {
       return  response.status(500).json(error);
    }
}

export const updateRide = async (request, response) => {
    try {
        const {_id } = request.body;  
       
        const Ride = await Rides.findById(_id);  

    

        if (!Ride) {
            return response.status(404).json({ msg: 'Ride not found' });
        }
      
        await Rides.findByIdAndUpdate( _id, { $set: request.body });
        // $addtoset hota hai append karne ke liye

        response.status(200).json({ msg: 'Ride updated successfully', isSuccess: true });
    } catch (error) {
        response.status(500).json({ msg: 'Error updating Ride', error });
    }
};



export const deleteRide = async (request, response) => {
    try {
        const  id  = request.params.RideId;  
       
        
         const Ride = await Rides.findById(id);
           
        
        await Ride.deleteOne();
         
        response.status(200).json('Ride deleted successfully');
    } catch (error) {
       
        response.status(500).json(error)
    }
}

export const getRide = async (request, response) => {
    try {
        const id  = request.params.RideId;  
        
        const Ride = await Rides.findById(id);  

       
        if (!Ride) {
            return response.status(404).json({ message: 'Ride not found' });
        }

        response.status(200).json(Ride);  
    } catch (error) {
      
        response.status(500).json({ message: 'Error retrieving Ride', error });
    }
};

export const getAllRide = async (request, response) => {
    try {
          const   Ride = await Rides.find({});
            
        response.status(200).json(Ride);
    } catch (error) {
        response.status(500).json(error)
    }
}