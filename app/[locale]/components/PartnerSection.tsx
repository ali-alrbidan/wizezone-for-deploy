"use client";

//#region Imports
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { usePartners } from "@/hooks/partners/usePartners";
import type { Partner } from "@/services/api/partners.service";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { itemVariants, lineVariants } from "../variants";
import { useTranslations, useLocale } from "next-intl";
//#endregion

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

          {/* Slider */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p
            className={`
            text-sm mb-4
            ${isDark ? "text-gray-400" : "text-gray-600"}
          `}
          >
            {t("cta.question")}
          </p>
          <motion.a
            href="#contact"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              inline-flex items-center gap-2
              px-6 py-3
              rounded-full
              ${
                isDark
                  ? "bg-primary hover:bg-amber-700"
                  : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              }
              text-white font-medium
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
            `}
          >
            {t("cta.button")}
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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        group relative
        flex flex-col items-center justify-between
        rounded-2xl
        ${
          isDark
            ? "bg-gradient-to-b zinc-800 to-zinc-800/90 border border-white/10"
            : "bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-md"
        }
        h-52 p-6
        transition-all duration-300
        ${
          isDark
            ? "hover:border-primary/20 hover:shadow-lg hover:shadow-slate-700/20"
            : "hover:border-primary/40 hover:shadow-lg"
        }
        hover:-translate-y-1
        overflow-hidden
        cursor-pointer
      `}
    >
      {/* Logo Wrapper */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        className={`
          relative
          flex items-center justify-center
          h-24 w-full
          rounded-xl
          p-4
          z-10
          ${
            isDark
              ? "bg-zinc-800/30 backdrop-blur-sm"
              : "bg-zinc-50 backdrop-blur-sm"
          }
          ${isDark ? "" : "border border-gray-100"}
        `}
      >
        <motion.img
          src={item.LogoUrl}
          alt={name}
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
          className={`
            max-h-20
            max-w-[170px]
            object-contain
            relative z-10
            ${isDark ? "" : "filter brightness(0.9) contrast(1.1)"}
            `}
          loading="lazy"
        />
      </motion.div>

      {/* Text Content */}
      <div className="mt-4 text-center z-10 w-full">
        <motion.p
          whileHover={{
            color: isDark ? "#22d3ee" : "#f97316",
            x: 2,
          }}
          className={`
            text-sm font-semibold
           ${isDark ? "text-white" : "text-gray-800"} 
            leading-tight
            transition-colors duration-300
            truncate
          `}
        >
          {name}
        </motion.p>

        <p
          className={`
          mt-1 text-xs
          ${isDark ? "text-white/60" : "text-gray-600"}
          line-clamp-2
          min-h-[32px]
        `}
        >
          {description || t("placeholders.defaultDescription")}
        </p>
      </div>
    </motion.a>
  );
}
