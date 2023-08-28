import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | SANDA",
  description: "Make your better shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en" className="purple-dark text-foreground bg-background">
      <body className={inter.className}>
        <Providers>      
          {children}
        </Providers>
      </body>
    </html>
  );
}
