import type { Metadata } from "next";
import { Rock_Salt } from "next/font/google";
import Background from "./components/background/Background";
import "./globals.css";

const fontSimpsons = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Next.js + GraphQL + Simpsons",
  description: "A simple app to demonstrate the use of Next.js, GraphQL, and the Simpsons API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSimpsons.variable} body-content`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
