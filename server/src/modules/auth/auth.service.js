import userModel from "../user/user.model.js";

export const register = async (data) => {
  const user = await userModel.create(data);
  return user;
};

export const login = async (data) => {
  const user = await userModel.findOne(data);
  return user;
};
