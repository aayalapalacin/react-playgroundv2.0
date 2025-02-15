import type { Metadata } from "next";
import './styles/globals.css'

export const metadata: Metadata = {
  title: "React Playground",
  description: "Frontend tutorial library for development",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
