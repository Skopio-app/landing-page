import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skopio",
  description: "Skopio is a macOS activity tracking application.",
  applicationName: "Skopio",
  icons: {
    icon: "/assets/skopio-app-icon.png",
    shortcut: "/assets/skopio-app-icon.png",
    apple: "/assets/skopio-app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
