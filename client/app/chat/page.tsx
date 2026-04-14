"use client";

import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import MessageInput from "@/components/MessageInput";

export default function ChatPage() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center">
      <div className="w-[95%] h-[95%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <ChatWindow />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}