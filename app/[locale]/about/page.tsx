"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("AboutPage");
  const text = useLocale() === "ar" ? "وايز زون" : "Wise Zone";
  const letters =
    useLocale() === "ar"
      ? ["و", "ا", "يز", " ", "ز", "و", "ن"]
      : text.split("");
  // const letters = text.split("");
  return (
    <main className="pt-32 pb-20 max-sm:pb-10 max-sm:pt-20">
      <div className="max-w-7xl mx-auto px-6 space-y-32 max-sm:space-y-16">
        {/* ================= Hero ================= */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[26px] md:text-3xl font-bold mb-6"
          >
            <span>{useLocale() === "ar" ? "حول" : "About"} </span>
            <span className="text-primary">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -10,
                    filter: "blur(4px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05, // Staggered delay
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
            {/* <span>{useLocale() === "ar" ? " (Wise zone)" : ""} </span> */}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[15px] xl:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            {t("hero.description")}
          </motion.p>
          {[...Array(10)].map((_, i) => {
            const randomLeft = Math.random() * 90 + 5; // 5% to 95%
            const randomTop = Math.random() * 90 + 5; // 5% to 95%

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                }}
                animate={{
                  y: [0, Math.random() > 0.5 ? -30 : 30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
              />
            );
          })}
        </section>

        {/* ================= Who We Are ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-sm:gap-10 items-center"
        >
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + 0.4, duration: 0.6 }}
              className=" text-2xl md:text-3xl font-semibold  mb-6 relative"
            >
              {t("whoWeAre.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                transition={{ delay: 1 + 0.5, duration: 0.6 }}
                className=" bg-primary  h-[3px] block mt-2 absolute  "
              />
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + 0.6, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-300 max-sm:mx-2  leading-relaxed mb-5"
            >
              {t("whoWeAre.description1")}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + 0.7, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-300 max-sm:mx-2  leading-relaxed mb-5"
            >
              {t("whoWeAre.description2")}
            </motion.p>
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0, rotateY: 45 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ delay: 1 + 0.8, duration: 0.6 }}
            className="

              border
              rounded-3xl
              p-12 max-sm:p-5
              backdrop-blur-md
            "
          >
            <p className=" font-semibold mb-4 text-lg">
              {t("whoWeAre.role.title")}
            </p>
            <p className=" leading-relaxed text-gray-600 dark:text-gray-300">
              {t("whoWeAre.role.description")}
            </p>
          </motion.div>
        </motion.section>

        {/* ================= Our Philosophy ================= */}
        <section>
          <div className="text-center mb-16 ">
            <motion.h1
              className="text-xl md:text-2xl xl:text-3xl font-semibold  mb-4"
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              whileInView={{ letterSpacing: "normal", opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
              }}
            >
              {t("philosophy.title")}{" "}
            </motion.h1>

            {/* Animated separator */}
            <motion.div
              className="flex items-center justify-center gap-4 my-4"
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
              <motion.div
                className="w-12 h-px bg-gradient-to-r from-transparent to-primary "
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="w-1 h-1 bg-primary  rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="w-12 h-px bg-gradient-to-l from-transparent to-primary "
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>

            <motion.p
              className="lg:text-[17px] text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              {t("philosophy.subtitle")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("philosophy.items.clarity.title"),
                text: t("philosophy.items.clarity.text"),
              },
              {
                title: t("philosophy.items.people.title"),
                text: t("philosophy.items.people.text"),
              },
              {
                title: t("philosophy.items.practical.title"),
                text: t("philosophy.items.practical.text"),
              },
            ].map((item, index) => (
              <motion.div
                initial={{ x: 20, opacity: 0, rotateY: 45 }}
                whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                key={index}
                className="
                  group
                dark:bg-zinc-900/70
                  border-2 border-zinc-100 dark:border-zinc-800
                  rounded-3xl
                  p-8
                  backdrop-blur-md
                

                  hover:-translate-y-[2px]
                "
              >
                <h3 className=" text-xl font-semibold mb-3">{item.title}</h3>

                <span
                  className="
                    block
                    w-8 h-[2px]
                    bg-[#FF6A00]
                    mb-4
                    transition-all duration-300
                    group-hover:w-16
                  "
                ></span>

                <p className=" leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= Our Approach ================= */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="mb-10 flex items-center justify-center flex-col mx-auto gap-y-5">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl xl:text-3xl font-semibold   mb-6"
            >
              {t("approach.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className=" bg-primary  h-[3px] block mt-2 absolute  "
              />
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className=" lg:text-[17px] leading-relaxed text-gray-600 dark:text-gray-300"
            >
              {t("approach.description")}
            </motion.p>
          </div>
        </section>

        {/* ================= Why It Matters ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-sm:gap-10 items-center">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold  mb-6"
            >
              {t("whyItMatters.title")}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className=" leading-relaxed mb-5"
            >
              {t("whyItMatters.description1")}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className=" leading-relaxed"
            >
              {t("whyItMatters.description2")}
            </motion.p>
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0, rotateY: 45 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="

              border
              rounded-3xl
              p-12 max-sm:p-5
            "
          >
            <p className=" font-semibold text-lg mb-3">
              {" "}
              {t("whyItMatters.commitment.title")}
            </p>
            <p className=" leading-relaxed  text-gray-600 dark:text-gray-300">
              {t("whyItMatters.commitment.description")}
            </p>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center">
          <div className="flex justify-center items-center">
            {(useLocale() === "ar"
              ? ["دعنا", "نبدأ", "ب", "حوار"]
              : ["Let's ", "start ", "with ", "a ", "conversation "]
            ).map((item, index) => (
              <motion.h2
                initial={{ y: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="text-xl md:text-2xl  xl:text-3xl font-semibold  mb-6"
              >
                <span className="ml-2">{item}</span>
              </motion.h2>
            ))}
          </div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-10  text-gray-600 dark:text-gray-300"
          >
            {t("cta.description")}
          </motion.p>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              px-10 py-4
              rounded-2xl
              bg-primary

              text-lg
              font-semibold
              transition-all duration-300
              hover:bg-hover
              text-white
            "
          >
            {t("cta.button")}
          </a>
        </section>
      </div>
    </main>
  );
};
export default Page;
