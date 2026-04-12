import jwt from "jsonwebtoken";

export const protect = async (req , res)=>{
    try {
        let token;
        
        // check if token exist in header 
        if(req.headers.authorization?.startsWith("Bearer")){
             // Extract token from "Bearer TOKEN"
             token = req.headers.authorization.split(" ")[1].trim()
        }

         // If no token → unauthorized
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
      }
  
      // Verify token using secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Attach user ID to request object
      req.user = decoded.id;
   
      next(); // move to next middleware/controller

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Not authorized",
            error: error.message,
        });
        
    }
}