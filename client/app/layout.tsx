// app/layout.tsx
import "./globals.css";

import { ChatProvider } from "@/context/ChatContext";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}