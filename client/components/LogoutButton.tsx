"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove("token");
        router.push("/login");
    };

    return (
        <div className="border-b border-gray-700 text-cyan-600 font-semibold">
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-lg text-white">
                Logout
            </button>
        </div>
    );
}