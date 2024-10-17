import type { Metadata } from "next";
import "./globals.css";
import Page from './page'

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
        <Page/>
        {children}
      </body>
    </html>
  );
}
