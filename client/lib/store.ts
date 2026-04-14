import { create } from "zustand";

interface ChatState {
  userId: string;
  messages: any[];
  setUser: (id: string) => void;
  addMessage: (msg: any) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  userId: "",
  messages: [],

  setUser: (id) => set({ userId: id }),

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
}));