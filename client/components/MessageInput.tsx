"use client";

import { useState } from "react";
import { socket } from "@/lib/socket";
import { useChatStore } from "@/lib/store";


export default function MessageInput() {
  const [text, setText] = useState("");
  const { userId, selectedUser } = useChatStore();

  const sendMessage = () => {
    if (!text || !selectedUser) return;
  
    socket.emit("send_message", {
      sender: userId,
      receiver: selectedUser._id,
      content: text,
    });
  
    setText("");
  };

  return (
    <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-xl flex gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-full bg-white/10 outline-none"
      />

      <button
        onClick={sendMessage}
        className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition"
      >
        Send
      </button>
    </div>
  );
}
