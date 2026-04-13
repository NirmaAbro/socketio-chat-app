import {
  createMessage,
  getMessages,
  getMessageById,
  deleteMessage,
  updateMessage,
} from "./message.service.js";

export const sendMessageController = async (req, res) => {
  try {
    const { reciever, message, room } = req.body;
    const messagee = await createMessage({
      sender: req.user,
      reciever,
      message,
      room,
    });

    res.status(201).json({
      success: true,
      message: "Message created successfully",
      data: messagee,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getMessageController = async (req, res) => {
  try {
    const { reciever, room } = req.query;

    let messages;

    // Private chat
    if (reciever) {
      messages = await getMessages({
        $or: [
          { sender: req.user, reciever },
          { sender: reciever, reciever: req.user },
        ],
      });
    }

    // Group chat
    if (room) {
      messages = await getMessages({ room }).sort({ createdAt: 1 });
    }

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
