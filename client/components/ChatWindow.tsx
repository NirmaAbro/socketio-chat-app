"use client";

import { useChatStore } from "@/lib/store";
import LogoutButton from "./LogoutButton";

export default function ChatWindow() {
  const { messages, userId, selectedUser } = useChatStore();

  console.log("selected user:", selectedUser);
  const filteredMessages = messages.filter((msg) => {
    return (
      msg.sender === selectedUser?._id ||
      msg.receiver === selectedUser?._id
    );
  });

  return (
    <div className="flex flex-col h-full bg-[#0b141a]">

      {/* HEADER */}
      <div className="p-4 border-b border-gray-700 flex justify-between">
        {/* name  */}
        <div className="p-4 border-b border-gray-700 text-cyan-600 font-semibold">
          Name:   {selectedUser?.username}
        </div>

        <div className="flex gap-2">
          {/* btn  */}
          <div className="">
            <button className="bg-green-600 px-4 rounded-lg text-white">
              Call
            </button>
          </div>

          <div>
            <LogoutButton />
          </div>

        </div>

      </div>


      {/* MESSAGES */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {filteredMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === userId ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs text-sm ${msg.sender === userId
                ? "bg-[#005c4b] text-white"
                : "bg-[#202c33] text-white"
                }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-3 border-t border-gray-700 flex gap-2">
        <input
          className="flex-1 bg-[#202c33] text-white p-2 rounded-lg outline-none"
          placeholder="Type a message"
        />
        <button className="bg-green-600 px-4 rounded-lg text-white">
          Send
        </button>
      </div>
    </div>
  );
}