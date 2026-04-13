import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    let token;

    // check if token exists in header
    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1].trim();
    }

    // no token
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user id
    req.user = decoded.id;

    next(); // ✅ now works
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Not authorized",
      error: error.message,
    });
  }
};