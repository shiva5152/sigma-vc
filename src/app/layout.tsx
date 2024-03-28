import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "@/redux/provider";
import { Web3Providers } from "./Web3Providers";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import ProtectedRoute from "@/components/ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sigma VC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Providers>
          <AppProvider>
            <ProtectedRoute>{children}</ProtectedRoute>
          </AppProvider>
        </Web3Providers>
      </body>
    </html>
  );
}
