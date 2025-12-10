import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdurrahman Faiz - Portfolio",
  description: "Showcasing my expertise in full-stack development with modern technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-gray-100 text-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
