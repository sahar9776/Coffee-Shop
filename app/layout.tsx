import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import CartProvider from "@/Context/CartContext";
import FavoriteProvider from "@/Context/FavoriteContext";

const Sora = localFont({
  src: "../public/fonts/Sora.ttf",
});

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Best Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sora.className} bg-black text-white`}>
        <CartProvider>
          <FavoriteProvider>
            <Navbar />
            {children}
          </FavoriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
