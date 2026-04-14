import User from "./user.model.js";

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

export const getUser = async (id) => {
    const user = await User.findById(id);
    return user;
};