import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kibreab Kebede | Data Science Portfolio",
  description: "Statistician, Data Scientist & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased flex h-screen overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 h-full overflow-y-auto bg-[#050505]">
          {children}
        </main>
      </body>
    </html>
  );
}
