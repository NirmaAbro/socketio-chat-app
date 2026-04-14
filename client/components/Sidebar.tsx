"use client";

import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { useChatStore } from "@/lib/store";


export default function Sidebar() {
  type User = {
    status: ReactNode;
    username: ReactNode;
    _id: string;
    name: string;
  };

  const [users, setUsers] = useState<User[]>([]);
  const { setSelectedUser, onlineUsers } = useChatStore();


  const handleFetchUsers = async (): Promise<void> => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      });

      console.log("data user", res?.data?.data);
      setUsers(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchUsers();
  }, []);

  console.log("ENV:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h1 className="text-lg font-bold text-green-400">
          Chat App
        </h1>

      </div>

      {/* Users list */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {users.length === 0 ? (
          <p className="p-4 text-gray-400">No users found</p>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className="flex items-center gap-3 p-4 hover:bg-[#2a3942] transition duration-200 cursor-pointer rounded-lg mx-2"
            >
              <div className="text-2xl text-gray-300">
                <RxAvatar />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-white">{user?.username}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <span>
                    {onlineUsers.includes(user._id) ? "🟢" : "⚫"}
                  </span>
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}