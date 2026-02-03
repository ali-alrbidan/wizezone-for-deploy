import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import Script from "next/script";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Wise Zone",
  description: "Training & Consulting Platform",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className=" antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          // disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Navbar />
            {children}

            <ContactSection />

            <Script
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`}
              strategy="afterInteractive"
            />

            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
