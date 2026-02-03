"use client";
import Image from "next/image";
import { HowWeWorkSection } from "./HowWeWork";
import { ProofOfCredibilitySection } from "./ProofOfCredibilitySection";
import { ServiceCard } from "./ServiceCard";
import WhyChooseUs from "./WhyChooseUs";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MainOurService() {
  const t = useTranslations("MainServices");

  const leftCardDelays = [0, 0.2, 0.4];
  const rightCardDelays = [0, 0.2, 0.4];

  const leftColumn = [
    {
      title: t("categories.consultation.title"),
      items: t.raw("categories.consultation.items"),
    },
    {
      title: t("categories.businessSolution.title"),
      items: t.raw("categories.businessSolution.items"),
    },
    {
      title: t("categories.onlineServices.title"),
      items: t.raw("categories.onlineServices.items"),
    },
  ];

  const rightColumn = [
    {
      title: t("categories.recruitment.title"),
      items: t.raw("categories.recruitment.items"),
    },
    {
      title: t("categories.conference.title"),
      items: t.raw("categories.conference.items"),
    },
    {
      title: t("categories.students.title"),
      items: t.raw("categories.students.items"),
    },
  ];

  return (
    <section className="mt-6 space-y-4 dark:bg-zinc-900">
      <div className="mx-auto flex justify-center items-center py-10">
        <motion.div className="inline-block text-center">
          <motion.h1
            className="relative text-xl md:text-4xl font-bold bg-gradient-to-b dark:from-white dark:to-white/70 from-zinc-900 to-zinc-600 bg-clip-text text-transparent z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {t("title")}
            <motion.div
              className="absolute -bottom-3 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-sm text-zinc-500 dark:text-white/60 mb-12 mt-6 sm:text-md"
          >
            {t("description")}
          </motion.p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {/* Left Column - Cards enter from left with stagger */}
        <div className="flex flex-col gap-4 lg:gap-6 h-full">
          {leftColumn.map((service, index) => (
            <ServiceCard
              key={service.title}
              motionProps={{
                initial: { opacity: 0, x: -30, rotateY: -15 },
                whileInView: { opacity: 1, x: 0, rotateY: 0 },

                transition: {
                  type: "spring",
                  stiffness: 90,
                  damping: 16,
                  mass: 1,
                  delay: leftCardDelays[index],
                },
                whileHover: {
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                },
              }}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="relative flex justify-start items-start h-full"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 h-full w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full rounded-xl -mt-20 overflow-hidden"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/services.png"
                alt="Services"
                fill
                className="object-cover"
                sizes="30vw"
                priority={false}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl" />
          </motion.div>
        </motion.div>

        {/* Right Column - Cards enter from right with stagger */}
        <div className="flex flex-col gap-4 lg:gap-6 h-full">
          {rightColumn.map((service, index) => (
            <ServiceCard
              key={service.title}
              motionProps={{
                initial: { opacity: 0, x: -30, rotateY: 45 },
                whileInView: { opacity: 1, x: 0, rotateY: 0 },

                transition: {
                  type: "spring",
                  stiffness: 90,
                  damping: 16,
                  mass: 1,
                  delay: rightCardDelays[index],
                },
                whileHover: {
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                },
              }}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>

      <div>
        <WhyChooseUs />
        <div>
          <HowWeWorkSection />
        </div>
        <div>
          <ProofOfCredibilitySection />
        </div>
      </div>
    </section>
  );
}
