"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";

export default function Sidebar() {
  type User = {
    status: ReactNode;
    username: ReactNode;
    _id: string;
    name: string;
  };

  const [users, setUsers] = useState<User[]>([]);


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
    <div className="w-full bg-[#202c33] text-white flex flex-col">

      {/* HEADER */}
      <div className="p-4 border-b border-gray-700 font-bold text-lg">
        Chats
      </div>

      {/* USERS */}
      <div className="flex-1 overflow-y-auto">
        {users.length === 0 ? (
          <p className="p-4 text-gray-400">No users found</p>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              className="flex items-center gap-3 p-4 hover:bg-[#2a3942] cursor-pointer"
            >
              {/* <div className="w-10 h-10 bg-gray-500 rounded-full" /> */}
              <div>
              <RxAvatar />
              </div>
              <div>
                <p className="font-semibold">{user?.username}</p>
                <p className="text-xs text-gray-400">{user?.status}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}