import { io } from "socket.io-client";

// Replace with your backend URL later
const SOCKET_URL = "http://localhost:5000";

export const socket = io(SOCKET_URL, {
  autoConnect: false, // We will connect manually after auth
});
