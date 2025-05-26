import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KeystoneApolloProvider from "@/data/apollo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Well CC",
  description: "The Well Christian Club is a faith-based platform helping singles grow spiritually and find meaningful relationships grounded in shared beliefs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`} 
      >
        <KeystoneApolloProvider>
        {children}
        </KeystoneApolloProvider>
      </body>
      
    </html>
   
  );
}
