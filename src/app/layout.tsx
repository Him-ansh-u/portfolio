import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Sharma | Full Stack Developer (MERN, Next.js)",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js and scalable web applications. Open to full-time opportunities.",

  openGraph: {
    title: "Himanshu Sharma | Full Stack Developer",
    description:
      "Portfolio of Himanshu Sharma – Full Stack Developer building modern, high-performance web apps.",
    url: "https://portfolio-him-ansh-us-projects.vercel.app/",
    images: [
      {
        url: "https://portfolio-him-ansh-us-projects.vercel.app/og_img.webp",
        width: 1200,
        height: 630,
        alt: "Himanshu Sharma Portfolio",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
