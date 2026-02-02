import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import Script from "next/script";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Wise Zone",
  description: "Training & Consulting Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}

          <ContactSection />

          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`}
            strategy="afterInteractive"
          />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
