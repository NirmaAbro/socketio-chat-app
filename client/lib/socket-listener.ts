import { socket } from "./socket";
import { useChatStore } from "./store";

export const initSocket = () => {
  const { setOnlineUsers, addMessage } = useChatStore.getState();

  socket.on("online_users", (users) => {
    setOnlineUsers(users);
  });

  socket.on("receive_message", (msg) => {
    addMessage(msg);
  });
};