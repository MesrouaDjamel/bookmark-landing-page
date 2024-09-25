import type { Metadata } from "next";
import "./globals.css";
import {Rubik} from 'next/font/google'
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ['latin'], weight: ['400','500'] })

export const metadata: Metadata = {
  title: "Bookmark landing page",
  description: "Bookmark landing page challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        <Headers />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
