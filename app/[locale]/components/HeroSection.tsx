"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const locale = useLocale();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = [
    {
      text: t("words.welcome"),
      className: `text-3xl lg:text-5xl text-gray-200 ${locale == "ar" ? "ml-3 max-sm:ml-2" : "sm:ml-2"}`,
    },
    {
      text: t("words.to"),
      className: `text-3xl lg:text-5xl text-gray-200 ${locale == "ar" ? "ml-3 max-sm:ml-2" : "sm:ml-2"}`,
    },
    {
      text: t("words.wise"),
      className: `text-3xl lg:text-5xl  text-primary ${locale == "ar" ? "ml-3 max-sm:ml-2" : "sm:ml-2"}`,
    },
    {
      text: t("words.zone"),
      className: `text-3xl lg:text-5xl  text-primary ${locale == "ar" ? "ml-3 max-sm:ml-2" : "sm:ml-2"}`,
    },
  ];

  // Don't render until theme is mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-zinc-800 rounded-lg max-w-3xl mx-auto mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded-lg max-w-2xl mx-auto mb-10"></div>
          <div className="h-14 bg-gray-200 dark:bg-zinc-800 rounded-xl max-w-md mx-auto mb-12"></div>
          <div className="h-[500px] bg-gray-200 dark:bg-zinc-800 rounded-2xl max-w-5xl mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 sm:py-24 px-6 max-sm:px-4 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video-for-herosection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "bg-black/60" : "bg-black/50"
          }`}
        />
      </div>

      {theme === "dark" ? (
        <>
          <div className="absolute top-[200px] right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-primary/10 opacity-[0.30] blur-[220px] rounded-full pointer-events-none" />
          <div className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4A1CE6] opacity-[0.15] blur-[200px] rounded-full pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-[200px] right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-200 to-orange-200 opacity-20 blur-[220px] rounded-full pointer-events-none" />
          <div className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 blur-[200px] rounded-full pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full font-serif">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center flex-wrap">
            {words.map((word, index) => (
              <motion.h2
                key={index}
                className={`${word.className} font-semibold  `}
                initial={{
                  y: index % 2 === 0 ? 15 : -15,
                  opacity: 0,
                  rotateY: 40,
                }}
                animate={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
              >
                <span className="ml-2">{word.text}</span>
              </motion.h2>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" md:text-md xl:text-xl text-center max-w-4xl mx-auto mb-10 text-gray-200  dark:text-gray-300 drop-shadow-lg"
        >
          {t("description.part_one")}
          <br />
          {t("description.part_two")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mb-12 "
        >
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="px-10 py-4 rounded-xl font-semibold text-sm md:text-md lg:text-[17px] bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-2xl transition-all duration-300"
          >
            {t("cta")}
          </motion.button>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-white"
        >
          <div className="p-1 rounded-full bg-green-500/30 text-green-300 backdrop-blur-sm">
            <Check className="w-5 h-5" />
          </div>

          <p className="text-sm sm:text-md lg:text-[17px] font-medium drop-shadow-lg">
            {t("trust")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
