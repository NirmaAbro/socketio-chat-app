"use client";

import { useState } from "react";
import axios from "axios";
import { socket } from "@/lib/socket";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Call backend login API
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { token, user } = res.data;

      // Store token
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);

      // Connect socket
      socket.connect();

      // Tell backend user is online
      socket.emit("user_online", user._id);

      // Redirect to chat
      window.location.href = "/chat";

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 bg-white shadow-xl rounded-2xl w-80 space-y-4">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}