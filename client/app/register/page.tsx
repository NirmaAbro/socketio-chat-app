"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#111b21] text-white">
      <div className="w-full max-w-md p-6 bg-[#202c33] rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-[#111b21] outline-none"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-[#111b21] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-[#111b21] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-green-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}