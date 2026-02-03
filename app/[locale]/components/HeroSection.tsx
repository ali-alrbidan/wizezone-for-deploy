"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/hero-main.jpg",
    "/hero-main.jpg",
    "/hero-main.jpg",
    "/hero-main.jpg",
    "/hero-main.jpg",
    "/hero-main.jpg",
    "/hero-main.jpg",
    "/hero-main.jpg",
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 0,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      s.moveToIdx(0, false); // Initialize to first slide
    },
  });

  // Auto slide function
  const autoSlide = useCallback(() => {
    if (slider?.current) {
      slider.current.next();
    }
  }, [slider]);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(autoSlide, 5000);

    return () => clearInterval(interval);
  }, [slider, heroImages.length, autoSlide]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = [
    {
      text: t("words.welcome"),
    },
    {
      text: t("words.to"),
    },
    {
      text: t("words.wise"),
      className: "text-primary",
    },
    {
      text: t("words.zone"),
      className: "text-primary",
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
    <section
      className={`
        relative py-20 sm:py-24 px-6 overflow-hidden
        transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-zinc-900 text-white"
            : "bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900"
        }
      `}
    >
      {theme === "dark" ? (
        <div
          key="dark-bg"
          className="absolute top-[200px] right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-primary/10 opacity-[0.30] blur-[220px] rounded-full pointer-events-none"
        />
      ) : (
        <div
          key="light-bg-1"
          className="absolute top-[200px] right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-200 to-orange-200 opacity-40 blur-[220px] rounded-full pointer-events-none"
        />
      )}

      {theme === "dark" ? (
        <div
          key="dark-bg-2"
          className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4A1CE6] opacity-[0.15] blur-[200px] rounded-full pointer-events-none"
        />
      ) : (
        <div
          key="light-bg-2"
          className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-[200px] rounded-full pointer-events-none"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with TypewriterEffect */}
        <div className="text-center mb-6">
          <TypewriterEffect words={words} />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`
          text-sm md:text-md xl:text-[17px] text-center max-w-3xl mx-auto mb-10
            ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
          `}
        >
          {t("description.part_one")}
          <br />
          {t("description.part_two")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`
              px-10 py-4 rounded-xl font-semibold text-sm md:text-md lg:text-[17px]
              transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-primary hover:bg-amber-700 text-white"
                  : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg"
              }
              shadow-lg
            `}
          >
            {t("cta")}
          </motion.button>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className={`flex items-center justify-center gap-3 mb-16 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <div
            className={`
              p-1 rounded-full
              ${
                theme === "dark"
                  ? "bg-green-900/30 text-green-400"
                  : "bg-green-100 text-green-600"
              }
              `}
          >
            <Check className="w-5 h-5" />
          </div>

          <p className="text-sm sm:text-md lg:text-[17px] font-medium">
            {t("trust")}
          </p>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-5xl">
            {/* Slider background glow */}
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="dark-slider-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[-120px] right-[40px] w-[350px] h-[350px] bg-primary opacity-[0.25] blur-[200px] rounded-full z-0"
                />
              ) : (
                <motion.div
                  key="light-slider-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[-120px] right-[40px] w-[350px] h-[350px] bg-gradient-to-r from-amber-200 to-orange-200 opacity-30 blur-[200px] rounded-full z-0"
                />
              )}
            </AnimatePresence>

            {/* Slider */}
            <div
              ref={sliderRef}
              className={`
                keen-slider rounded-2xl overflow-hidden
                shadow-2xl
                ${
                  theme === "dark"
                    ? "border border-white/10"
                    : "border border-gray-200"
                }
              `}
            >
              {heroImages.map((img, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="w-full h-full min-h-[500px] relative">
                    <Image
                      src={img}
                      fill
                      className="object-cover"
                      alt={`Hero Slide ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      // Add error handling
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.jpg"; // Add fallback image
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {heroImages.length > 1 && (
              <>
                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => slider.current?.prev()}
                  className={`
                    absolute left-4 md:left-[-20px] top-1/2 -translate-y-1/2
                    w-10 h-10 md:w-[50px] md:h-[50px]
                    rounded-full
                    flex items-center justify-center
                    backdrop-blur-md
                    transition-colors duration-300
                    z-20
                    shadow-lg
                    ${
                      theme === "dark"
                        ? "bg-[#ffffff1a] hover:bg-[#ffffff33] border border-white/30 text-white"
                        : "bg-white/80 hover:bg-white border border-gray-300 text-gray-800"
                    }
                  `}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>

                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => slider.current?.next()}
                  className={`
                    absolute right-4 md:right-[-20px] top-1/2 -translate-y-1/2
                    w-10 h-10 md:w-[50px] md:h-[50px]
                    rounded-full
                    flex items-center justify-center
                    backdrop-blur-md
                    transition-colors duration-300
                    z-20
                    shadow-lg
                    ${
                      theme === "dark"
                        ? "bg-[#ffffff1a] hover:bg-[#ffffff33] border border-white/30 text-white"
                        : "bg-white/80 hover:bg-white border border-gray-300 text-gray-800"
                    }
                  `}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>

                {/* Slider dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => slider.current?.moveToIdx(idx)}
                      className={`
                        w-3 h-3 rounded-full transition-all duration-300
                        ${
                          currentSlide === idx
                            ? theme === "dark"
                              ? "bg-primary w-8"
                              : "bg-gradient-to-r from-orange-500 to-amber-500 w-8"
                            : theme === "dark"
                              ? "bg-white/30 hover:bg-white/50"
                              : "bg-gray-300 hover:bg-gray-400"
                        }
                      `}
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-current={currentSlide === idx ? "true" : "false"}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
