import Message from "../modules/message/message.model.js";

// Store online users
const onlineUsers = new Map();

export const registerChatHandlers = (io, socket) => {
  // =============================
  // USER CONNECT (REGISTER USER)
  // =============================

  socket.on("user_online", (userId) => {
    onlineUsers.set(userId, socket.id);
  
    io.emit("online_users", Array.from(onlineUsers.keys()));
  });

  // =============================
  // SEND MESSAGE
  // =============================
  socket.on("send_message", async (data) => {
    const { receiver, room } = data;

    // 🔹 PRIVATE CHAT
    if (receiver) {
      const receiverSocketId = onlineUsers.get(receiver);

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive_message", data);
      }
    }

    // 🔹 GROUP CHAT
    if (room) {
      io.to(room).emit("receive_message", data);
    }
  });

  // =============================
  // DISCONNECT
  // =============================
  socket.on("disconnect", () => {
    for (let [userId, sockId] of onlineUsers.entries()) {
      if (sockId === socket.id) {
        onlineUsers.delete(userId);
      }
    }
  
    io.emit("online_users", Array.from(onlineUsers.keys()));
  });
};


