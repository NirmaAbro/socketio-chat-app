// app/layout.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";
import { initSocket } from "@/lib/socket-listener";

import { ChatProvider } from "@/context/ChatContext";

export default function RootLayout({ children }: any) {

  useEffect(() => {
    initSocket();
  }, []);

  return (
    <html>
      <body>
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}