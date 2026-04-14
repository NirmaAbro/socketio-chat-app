export default function Sidebar() {
  return (
    <div className="w-full bg-[#202c33] text-white flex flex-col">
      
      {/* HEADER */}
      <div className="p-4 border-b border-gray-700 font-bold text-lg">
        Chats
      </div>

      {/* USERS */}
      <div className="flex-1 overflow-y-auto">
        {["User A", "User B", "User C"].map((user, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 hover:bg-[#2a3942] cursor-pointer"
          >
            <div className="w-10 h-10 bg-gray-500 rounded-full" />
            <div>
              <p className="font-semibold">{user}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}