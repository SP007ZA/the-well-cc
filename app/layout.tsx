import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KeystoneApolloProvider from "@/data/apollo";
import { WhatsAppFloat } from "./_components/WhatsAppFloat";
import ScrollToTop from "./(routes)/_components/Menu/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Well: A Christian Dating Platform for Singles",
  description: "Join The Well Christian Club, a Christian dating platform for born-again singles seeking meaningful relationships and faith-based connections.",
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
         <WhatsAppFloat 
          phone="+27691432863"
          message="Hi 👋 I’m interested in joining The Well Christian Club and would like more information about membership and upcoming events.
"
        />
        </KeystoneApolloProvider>
      </body>
      
    </html>
   
  );
}
