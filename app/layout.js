import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zubair Coder — Full Stack Web Developer (Next.js & MERN Stack)",
  description:
    "“Hi, I’m Zubair — a passionate Full Stack Web Developer specialising in Next.js and the MERN stack (MongoDB, Express.js, React & Node.js). I build clean, responsive, and scalable web applications that solve real‑world problems.”",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="container mx-auto"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
