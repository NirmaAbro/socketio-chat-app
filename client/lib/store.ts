import { create } from "zustand";

type ChatStore = {
  userId: string;
  selectedUser: any;
  setSelectedUser: (user: any) => void;

  messages: any[];
  setMessages: (msgs: any[]) => void;
  addMessage: (msg: any) => void;

  onlineUsers: string[];
  setOnlineUsers: (users: string[]) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  userId: "myId123", // replace with real logged-in user

  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),

  messages: [],
  setMessages: (msgs) => set({ messages: msgs }),
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),

  onlineUsers: [],
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));