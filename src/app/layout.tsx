import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIFEBridge MedTech — Business OS",
  description: "Business OS + GST + Business Intelligence for LIFEBridge MedTech",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
