"use client";

import { createContext, useContext, useState } from "react";

const ChatContext = createContext<any>(null);

export const ChatProvider = ({ children }: any) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  return (
    <ChatContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        messages,
        setMessages,
        onlineUsers,
        setOnlineUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);