import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Toaster } from "@/components/ui/toaster";

import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { Suspense } from "react";
import Loading from "@/components/auth/Loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MindMingle",
  description: "let's bring minds together ",
  icons: "/icon.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
