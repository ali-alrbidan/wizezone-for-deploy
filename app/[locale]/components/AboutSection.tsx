"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { itemVariants, lineVariants } from "../variants";

export default function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-200">
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

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center lg:justify-start h-full"
        >
          <div className="bg-white/80 dark:bg-zinc-800/30 backdrop-blur-md border-gray-200 border-2 dark:border-zinc-800 rounded-3xl overflow-hidden max-w-[480px] w-full h-full shadow-lg dark:shadow-none">
            <img
              src="/About.png"
              className="w-full h-full object-cover"
              alt="About Image"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full flex flex-col"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 dark:text-white/70 leading-relaxed mb-6"
          >
            {t("history")}
          </motion.p>

          {/* vision box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-[900px] bg-white/90 dark:bg-zinc-800/30 border dark:border-2 border-gray-200 dark:border-zinc-800 backdrop-blur-md rounded-[20px] p-10 flex flex-col sm:flex-row gap-6 mb-6 shadow-md dark:shadow-none"
          >
            {/* icon */}
            <div className="w-20 sm:w-[90px] h-[65px] rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
              <img
                src="/visionimg.svg"
                alt="Vision Icon"
                className="w-[30px] h-[30px]"
              />
            </div>

            <div className="text-box flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("vision.title")}
              </h2>
              <p className="text-gray-700 dark:text-white/70 leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-[900px] bg-white/90 dark:bg-zinc-800/30 border border-gray-200 dark:border-2 dark:border-zinc-800 backdrop-blur-md rounded-[20px] p-10 flex flex-col sm:flex-row gap-6 shadow-md dark:shadow-none"
          >
            {/* icon */}
            <div className="w-20 sm:w-[100px] h-[65px] rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
              <img
                src="/missionicon.svg"
                alt="Mission Icon"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="text-box flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("mission.title")}
              </h2>
              <p className="text-gray-700 dark:text-white/70 leading-relaxed">
                {t("mission.description")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
