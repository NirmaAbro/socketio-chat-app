import {
    getAllUsers,
    getUser,
  } from "./user.service.js";
  
  export const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  };

  export const getUserController = async (req, res) => {
    try {
      const user = await getUser(req.params.id);
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  };