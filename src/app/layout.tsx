import type { Metadata } from "next";
import "./styles/globals.css";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "React Playground",
  description: "Frontend tutorial library for development",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"/>
    <body className="bg-gray-100">
        <header className="bg-slate-900 text-white p-2 text-center mb-4">
          <Navigation />
        </header>
        {children}
        <footer className="bg-slate-900 text-white p-4 text-center">
          Made with ❤️ by {"React Playground"}
        </footer>
      </body>
    </html>
  );
}
