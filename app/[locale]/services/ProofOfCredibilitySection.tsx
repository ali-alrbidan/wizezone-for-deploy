"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ProofOfCredibilitySection() {
  const t = useTranslations("ProofOfCredibility");

  const cards = [
    { title: t("cards.expert.title"), text: t("cards.expert.text") },
    { title: t("cards.experience.title"), text: t("cards.experience.text") },
    { title: t("cards.custom.title"), text: t("cards.custom.text") },
    { title: t("cards.sustainable.title"), text: t("cards.sustainable.text") },
  ];

  return (
    <section className="mt-24">
      <div className="text-center mb-16 relative overflow-hidden py-8">
        <div className="relative">
          <motion.h2
            className="text-xl md:text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {t("title").split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3"
                variants={{
                  hidden: {
                    y: 40,
                    opacity: 0,
                    filter: "blur(5px)",
                  },
                  visible: {
                    y: [0, -15, 0], // Up and down motion
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                      y: {
                        duration: 3,

                        repeatType: "reverse",
                        delay: index * 0.2,
                        ease: "easeInOut",
                      },
                      opacity: { duration: 0.6 },
                      filter: { duration: 0.6 },
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtitle with typewriter effect */}
          <div className="overflow-hidden">
            <motion.p
              className="text-sm ;sm:text-md lg:text-[17px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto max-sm:px-3 "
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 2xl:max-w-7xl mx-auto">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotateY: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 16,
              mass: 1,
              delay: index * 0.3,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="
              group border-2 dark:bg-zinc-900/90
                        border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md dark:shadow-zinc-800/20 dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
              
              rounded-2xl
              p-6
              backdrop-blur-md
              transition-all duration-300 ease-out
              
              hover:-translate-y-[2px]
            "
          >
            {/* Title */}
            <h3 className="text-gray-700 dark:text-gray-200 text-[18px] font-semibold mb-3">
              {item.title}
            </h3>

            {/* Accent Line */}
            <span
              className="
                block
                w-8 h-[2px]
                bg-[#FF5B25]
                mb-3
                transition-all duration-300
                group-hover:w-14
              "
            ></span>

            {/* Text */}
            <p className="text-[#A7ADC2] text-[15px] leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
