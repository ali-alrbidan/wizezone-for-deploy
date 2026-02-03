"use client";
import { motion } from "framer-motion";
import { itemVariants, lineVariants, paragraghVariant } from "../variants";
import { useTranslations } from "next-intl";

export function HowWeWorkSection() {
  const t = useTranslations("HowWeWork");

  const steps = [
    {
      number: "01",
      title: t("steps.diagnose.title"),
      description: t("steps.diagnose.description"),
    },
    {
      number: "02",
      title: t("steps.design.title"),
      description: t("steps.design.description"),
    },
    {
      number: "03",
      title: t("steps.engage.title"),
      description: t("steps.engage.description"),
    },
    {
      number: "04",
      title: t("steps.measure.title"),
      description: t("steps.measure.description"),
    },
  ];

  return (
    <section className="mt-20 w-full">
      {/* Section Title */}
      <div className="mb-10 flex items-center justify-center flex-col mx-auto gap-y-5">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className=" text-3xl font-semibold relative"
        >
          {t("title")}
          <motion.span
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            className=" bg-primary  h-[3px] block mt-2 absolute  "
          />
        </motion.h2>
        <motion.p
          variants={paragraghVariant}
          initial="hidden"
          whileInView="visible"
          className="text-gray-600 dark:text-gray-300 max-sm:mx-5 text-center"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
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
              group
              dark:bg-zinc-900/90
              border-2 border-zinc-100 dark:border-zinc-800
              rounded-2xl
              p-6
              backdrop-blur-md
              transition-all duration-300 ease-out
                         shadow-sm hover:shadow-lg dark:shadow-zinc-800/20 dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
              
              hover:-translate-y-[2px]
            "
          >
            {/* Number */}
            <div
              className="
                text-primary
                text-[22px]
                font-semibold
                mb-4
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-gray-700 dark:text-gray-200 text-[20px] font-semibold mb-2">
              {step.title}
            </h3>

            {/* Accent Line */}
            <span
              className="
                block
                w-8 h-[2px]
                bg-primary
                mb-3
                transition-all duration-300
                group-hover:w-14
              "
            ></span>

            {/* Description */}
            <p className="text-[#A7ADC2] text-[15px] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
