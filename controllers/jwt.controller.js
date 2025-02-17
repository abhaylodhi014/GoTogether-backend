
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    //split token and bearer
    
    const token = authHeader && authHeader.split(' ')[1];
  
    
    if (token == null) {
        return response.status(401).json({ msg: 'token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        //succeful hai tu user nahi tu error
        if (error) {
            return response.status(403).json({ msg: 'invalid token' })
        }

        request.user = user;
        next();
        //agar sab kuch sahi hai tu age chalu
    })
}

