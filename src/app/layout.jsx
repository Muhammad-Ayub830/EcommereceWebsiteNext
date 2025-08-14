// "use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import Context from "./Context";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Website",
  description: "The Front end of Ecommerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >

        <main>
          <Context>
            {children}
          </Context>

        </main>

      </body>
    </html>
  );
}
