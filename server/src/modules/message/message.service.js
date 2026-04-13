import Message from "./message.model.js";

export const createMessage = async (data) => {
  const message = await Message.create(data);
  return message;
};

export const getMessages = async (filter) => {
    return await Message.find(filter).sort({ createdAt: 1 });
  };

export const deleteMessage = async (id) => {
  const message = await Message.findByIdAndDelete(id);
  return message;
};

export const updateMessage = async (id, data) => {
  const message = await Message.findByIdAndUpdate(id, data, { new: true });
  return message;
};

export const getMessageById = async (id) => {
  const message = await Message.findById(id);
  return message;
};
