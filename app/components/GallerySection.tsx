"use client";

import { motion } from "framer-motion";
import { itemVariants, lineVariants } from "../variants";
import { useEffect, useState } from "react";
import { Gallery } from "../types";
import Image from "next/image";

export default function GallerySection() {
  const [gallery, setGallery] = useState<Gallery[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        console.log(response);
        console.log(data);

        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-10 flex items-center justify-center mx-auto">
            <h2 className="text-3xl font-semibold">Our Gallery</h2>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-200 leading-relaxed">
            Glimpses of our journey in developing skills and creating success.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="group flex gap-6 rounded-3xl border border-gray-300 dark:border-gray-600 dark:bg-zinc-900 p-6 animate-pulse"
              >
                <div className="w-[180px] aspect-square flex-shrink-0 overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 bg-white dark:bg-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-10 flex items-center justify-center mx-auto">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Our Gallery{" "}
            <motion.span
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-primary h-[3px] block mt-2"
            />
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
        >
          Glimpses of our journey in developing skills and creating success.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {gallery?.map((item, index) => (
            <motion.div
              key={item.Id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="
                group flex flex-col md:flex-row gap-6 rounded-3xl 
                border-2 border-gray-100 dark:border-zinc-800
                bg-white dark:bg-zinc-800/30 p-6 
                transition-all duration-300 ease-out
                hover:-translate-y-[4px]
                hover:border-primary/20 dark:hover:border-primary/20
                hover:shadow-xl dark:hover:shadow-gray-900/50
                shadow-lg dark:shadow-gray-900/30
              "
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="
                  w-full md:w-[180px] aspect-square flex-shrink-0 
                  overflow-hidden rounded-xl bg-gray-100 dark:bg-white/10
                "
              >
                <Image
                  src={item.ImageUrl}
                  alt={item.TitleEn}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              <div className="text-left flex-1 min-w-0">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {item.TitleEn}
                </h3>

                <motion.span
                  className="
                    mt-2 mb-4 block h-[2px] w-6
                    bg-primary
                    transition-all duration-300
                    group-hover:w-12
                  "
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />

                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  {item.DescriptionEn}
                </p>

                {/* Read More Indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 flex items-center gap-2 text-primary/90 text-sm font-medium"
                >
                  <span>View Details</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      repeatDelay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
