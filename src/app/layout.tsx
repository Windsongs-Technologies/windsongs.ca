import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windsongs | Custom Software Engineering & AI Solutions",
  description: "Toronto-based custom software engineering company specializing in AI solutions, business automation, and innovative technology consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
