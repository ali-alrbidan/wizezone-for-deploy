"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { itemVariants, lineVariants } from "../variants";

type NewsUI = {
  id: number;
  module: string;
  date: string;
  title: string;
  content: string;
};

function NewsCard({
  item,
  openId,
  setOpenId,
}: {
  item: NewsUI;
  openId: number | null;
  setOpenId: (id: number | null) => void;
}) {
  const isOpen = openId === item.id;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, rotateY: 45 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.5, delay: item.id * 0.1 }}
      className={`
        group
        border-2 border-gray-100 dark:border-gray-800
        bg-white dark:bg-zinc-900
        backdrop-blur-md
        rounded-3xl p-5 mb-6
        transition-all duration-300 ease-out
        shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/50
        ${isOpen ? "shadow-lg dark:shadow-gray-900/50" : ""}
      `}
    >
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
            {item.module} • {item.date}
          </p>
          <span
            className="mt-2 mb-3 block h-[2px] w-6
                    bg-primary
                    transition-all duration-300
                    group-hover:w-12"
          ></span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
        </div>

        {/* button */}
        <button
          onClick={() => setOpenId(isOpen ? null : item.id)}
          className="
            w-[40px] h-[40px] flex-shrink-0
            rounded-full bg-primary hover:bg-orange-600 dark:hover:bg-orange-700
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110 active:scale-95
            shadow-md hover:shadow-lg
          "
          aria-label={isOpen ? "Collapse news" : "Expand news"}
        >
          <img
            src="/plusSign.svg"
            alt="toggle icon"
            className={`
              w-[18px] h-[18px]
              transition-transform duration-300
              ${isOpen ? "rotate-45" : "rotate-0"}
            `}
          />
        </button>
      </div>

      {/* expandable */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 dark:bg-zinc-900/90 border-2 border-gray-100 dark:border-gray-800 rounded-2xl p-4"
        >
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {item.content}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Skeleton Loading Component
function NewsCardSkeleton() {
  return (
    <div className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-zinc-900 rounded-3xl p-5 mb-6 animate-pulse">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
        <div className="w-[40px] h-[40px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [newsList, setNewsList] = useState<NewsUI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();

        const mappedNews: NewsUI[] = data.map((n: any, index: number) => ({
          id: n.Order || index + 1,
          module: "News",
          date: n.CreatedDate || "Coming Soon",
          title: n.TitleEn || "Untitled",
          content: n.ShortDescriptionEn || "No content available.",
        }));

        setNewsList(mappedNews);
      } catch (err) {
        console.error("News fetch error:", err);
        setNewsList([]);
      } finally {
        setLoading(false);
      }
    }

    // Add a small delay to show loading state (optional)
    const timer = setTimeout(() => {
      loadNews();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 w-full bg-white dark:bg-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          {/* Title with line animation */}
          <div className="mb-10 flex items-center mx-auto">
            <motion.h2
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              className="text-3xl font-semibold text-gray-900 dark:text-white"
            >
              Our News{" "}
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
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300/90 leading-relaxed sm:text-lg"
          >
            WiseZone was honored with the Excellence in Training & Consulting
            Award, recognizing its outstanding impact in professional
            development. With a proven track record of empowering organizations
            and individuals alike, WiseZone continues to deliver transformative
            learning experiences and high-value consultancy services across
            diverse industries.
          </motion.p>
        </div>

        {/* Right */}
        <div>
          {loading ? (
            // Loading state with skeletons
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Latest Updates
                </h3>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
              {[...Array(3)].map((_, index) => (
                <NewsCardSkeleton key={index} />
              ))}
            </div>
          ) : newsList.length === 0 ? (
            // Empty state
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 border border-dashed border-gray-300 dark:border-gray-600 rounded-3xl bg-gray-50 dark:bg-gray-800"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No News Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check back later for updates.
              </p>
            </motion.div>
          ) : (
            // News cards
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Latest Updates
                </h3>
              </div>
              <div className="space-y-6">
                {newsList.map((item) => (
                  <NewsCard
                    key={item.id}
                    item={item}
                    openId={openId}
                    setOpenId={setOpenId}
                  />
                ))}
              </div>

              {/* View all button */}
              {newsList.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <button className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    View All News
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
