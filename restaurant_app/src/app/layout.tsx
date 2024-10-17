import type { Metadata } from "next";
import "./globals.css";
import Navigation from './navigation'

export const metadata: Metadata = {
  title: "Create Menu System",
  description: "Week 7 Assignment",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
