import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import StoreProvider from "./storeProvider";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Home | Todoz",
    template: "%s | Todoz"
  },
  description: "Todoz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
