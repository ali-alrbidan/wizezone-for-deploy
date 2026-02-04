"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { usePartners } from "@/hooks/partners/usePartners";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { itemVariants, lineVariants } from "../variants";
import { useTranslations, useLocale } from "next-intl";
import { Partner } from "../types";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PartnersSlider() {
  const t = useTranslations("PartnersSlider");
  const locale = useLocale();
  const { partners, loading } = usePartners();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const autoScroll = useRef(
    AutoScroll({
      speed: 1.0,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      align: "start",
      direction: locale === "ar" ? "rtl" : "ltr",
    },
    [autoScroll.current],
  );

  if (loading) {
    return (
      <section className="py-20 w-full bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-10 w-48 bg-gray-200 dark:bg-zinc-800 rounded-lg mx-auto mb-12 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-100 dark:bg-zinc-800 rounded-2xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (partners.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`py-20 w-full bg-gradient-to-b ${isDark ? "from-zinc-900 to-zinc-900/90" : "from-gray-50 to-white"} `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-center justify-center mx-auto ">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className=" text-3xl font-semibold "
          >
            {t("title")}{" "}
            <motion.span
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className=" bg-primary  h-[3px] block mt-2 "
            />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className={`
              absolute left-0 top-0 h-full w-20
              bg-gradient-to-r
              ${isDark ? "from-zinc-900" : "from-white"}
              to-transparent
              z-20 pointer-events-none
              rounded-l-2xl
            `}
          />

          <div
            className={`
              absolute right-0 top-0 h-full w-20
              bg-gradient-to-l
              ${isDark ? "from-zinc-900" : "from-white"}
              to-transparent
              z-20 pointer-events-none
              rounded-r-2xl
            `}
          />

          <div
            ref={emblaRef}
            className="overflow-x-hidden rounded-2xl relative pt-3"
          >
            <div className="flex">
              {partners.map((item: Partner, index: number) => (
                <motion.div
                  key={String(item.Id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex-[0_0_25%] px-2 min-w-[250px]"
                >
                  <PartnerCard item={item} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p
            className={`text-base md:text-lg mb-6 font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {t("cta.question")}
          </p>

          <motion.a
            href="#contact"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`
              group inline-flex items-center gap-3
              px-8 py-4 rounded-2xl
              font-semibold text-base
              relative overflow-hidden
              ${
                isDark
                  ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white"
                  : "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white"
              }
              shadow-[0_8px_30px_rgb(251,146,60,0.3)]
              hover:shadow-[0_12px_40px_rgb(251,146,60,0.4)]
              transition-all duration-300
            `}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <span className="relative z-10">{t("cta.button")}</span>
            {locale === "ar" ? (
              <ArrowLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
            ) : (
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

function PartnerCard({ item, index }: { item: Partner; index: number }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const locale = useLocale();
  const t = useTranslations("PartnersSlider");

  const name = locale === "ar" ? item.NameAr : item.NameEn;
  const description = locale === "ar" ? item.DescriptionAr : item.DescriptionEn;

  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href={item.url || "#"}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`
        group relative block
        rounded-3xl overflow-hidden
        h-72
        ${
          isDark
            ? "bg-gradient-to-br from-zinc-900/90 via-zinc-800/50 to-zinc-900/90"
            : "bg-gradient-to-br from-white via-gray-50/50 to-white"
        }
        border backdrop-blur-xl
        ${
          isDark
            ? "border-white/10 hover:border-amber-500/30"
            : "border-gray-200 hover:border-orange-400/40"
        }
        transition-all duration-500
        shadow-lg
        ${
          isDark
            ? "hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.3)]"
            : "hover:shadow-[0_20px_60px_-15px_rgba(251,146,60,0.25)]"
        }
        cursor-pointer
      `}
    >
      <div
        className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        ${
          isDark
            ? "bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5"
            : "bg-gradient-to-br from-orange-400/5 via-transparent to-amber-400/5"
        }
      `}
      />

      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

      <div className="relative h-full flex flex-col p-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className={`
            relative flex items-center justify-center
            flex-1 rounded-2xl overflow-hidden
            ${
              isDark
                ? "bg-zinc-950/30 backdrop-blur-sm"
                : "bg-gray-100/50 backdrop-blur-sm"
            }
            border
            ${isDark ? "border-white/5" : "border-gray-200/50"}
            p-6
          `}
        >
          {/* Decorative corner accents */}
          <div
            className={`absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg ${
              isDark ? "border-amber-500/20" : "border-orange-500/20"
            }`}
          />
          <div
            className={`absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 rounded-br-lg ${
              isDark ? "border-amber-500/20" : "border-orange-500/20"
            }`}
          />

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={item.LogoUrl}
              alt={item.NameEn}
              fill
              sizes="(max-width: 768px) 200px, 280px"
              className="object-contain p-4 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              onError={(e) => {
                console.error("Image load error:", e);
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="mt-5 space-y-2">
          <motion.h3
            className={`
              text-base font-bold tracking-tight
              ${isDark ? "text-white" : "text-gray-900"}
              group-hover:text-transparent group-hover:bg-clip-text
              ${
                isDark
                  ? "group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500"
                  : "group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-600"
              }
              transition-all duration-300
              truncate
            `}
          >
            {name}
          </motion.h3>

          <p
            className={`
              text-xs leading-relaxed
              ${isDark ? "text-gray-400" : "text-gray-600"}
              line-clamp-2 min-h-[2.5rem]
            `}
          >
            {description || t("placeholders.defaultDescription")}
          </p>
        </div>

        <div
          className={`
          absolute bottom-4 right-4 w-6 h-6 rounded-full
          flex items-center justify-center
          ${
            isDark
              ? "bg-amber-500/10 text-amber-400"
              : "bg-orange-500/10 text-orange-500"
          }
          opacity-0 group-hover:opacity-100
          transform translate-x-2 group-hover:translate-x-0
          transition-all duration-300
        `}
        >
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.a>
  );
}
