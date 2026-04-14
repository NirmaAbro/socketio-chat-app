"use client";

import ChatSidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

export default function Page() {

  
  return (
    <div className="h-screen flex bg-[#111b21]">
    <div className="w-full max-w-6xl mx-auto flex">
      <div className="hidden md:flex md:w-1/3 lg:w-1/4">
        <ChatSidebar />
      </div>
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  </div>
  );
}