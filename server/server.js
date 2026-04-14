import app from "./src/app.js";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import { registerChatHandlers } from "./src/sockets/chat.socket.js";

dotenv.config();

// Create HTTP server (needed for Socket.IO)
const server = http.createServer(app);

// Attach socket.io to server
const io = new Server(server, {
  cors: {
    origin: "*", // allow frontend
  },
});

connectDB();

// Listen for socket connections
io.on("connection", (socket) => {
  registerChatHandlers(io, socket);
});

// Start server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
