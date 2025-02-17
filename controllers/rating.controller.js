import Rating from "../models/rating.model.js";
export const newRating = async (request, response) => {
    try {

        const newRating = await new Rating(request.body);
        newRating.save();

       return response.status(200).json('Rating sent successfully');
    } catch (error) {
       return  response.status(500).json(error);
    }
}
export const getRating = async (request, response) => {
    try {
        const username = request.params.username;  
       
         // Query the ratings for the given username
         const ratings = await Rating.find({ratedUser : username});
        
         const avgRating =
         ratings.reduce((sum, r) => sum + r.rating, 0) / (ratings.length || 1);
        response.status(200).json({ averageRating: avgRating.toFixed(1), ratings });
    } catch (error) {
        response.status(500).json(error);
    }
};
