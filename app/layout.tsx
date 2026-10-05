import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulas International School | The Modern Gurukul",
  description:
    "Discover Tulas International School — a holistic learning environment where tradition meets tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}