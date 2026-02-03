"use client";
import { motion } from "framer-motion";
import { itemVariants, lineVariants, paragraghVariant } from "../variants";
import ClientsCard from "./clientCards";
import { useTranslations } from "next-intl";

export default function MainClientPage() {
  const t = useTranslations("MainClientPage");

  return (
    <section className="py-24">
      <div className="mb-10 flex items-center justify-center flex-col mx-auto ">
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
        </motion.h2>{" "}
        <motion.p
          variants={paragraghVariant}
          initial="hidden"
          whileInView="visible"
          className="text-gray-600 max-w-2xl text-center mt-3  max-sm:mx-3  dark:text-gray-300"
        >
          <span className="text-green-400  text-lg">✔ </span>
          {t("description")}
        </motion.p>
      </div>

      <ClientsCard />
    </section>
  );
}
