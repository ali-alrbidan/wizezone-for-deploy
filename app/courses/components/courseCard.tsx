"use client";

import type { CourseUI } from "../hooks/useCourses";
import { motion, AnimatePresence } from "framer-motion";

interface CourseCardProps {
  item: CourseUI;
  openId: number | null;
  setOpenId: (id: number | null) => void;
}

export default function CourseCard({
  item,
  openId,
  setOpenId,
}: CourseCardProps) {
  const isOpen = openId === item.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      transition={{
        layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        duration: 0.5,
      }}
      className={`
        relative
        border-2 
        border-zinc-100 dark:border-zinc-800 
        backdrop-blur-sm
        rounded-3xl p-5
        transition-all duration-300
        cursor-pointer
        group
        overflow-hidden
   
      `}
      onClick={() => setOpenId(isOpen ? null : item.id)}
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ff8533]/5 via-transparent to-[#ffa366]/5 dark:from-[#ff8533]/10 dark:via-transparent dark:to-[#ffa366]/10 opacity-0 group-hover:opacity-100"
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm mb-2 font-medium"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
          >
            Course
          </motion.p>
          <h3 className="text-gray-900 dark:text-white text-xl font-semibold leading-tight">
            {item.title}
          </h3>

          {/* Animated Underline */}
          <motion.div
            className="mt-3 h-[2px] bg-gradient-to-r from-[#ff8533] to-[#ffa366]"
            initial={{ width: "0%" }}
            whileInView={{ width: "32px" }}
            whileHover={{ width: "48px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="
            w-12 h-12
            rounded-full 
            flex items-center justify-center
            relative
            overflow-hidden
             bg-white-400 shadow-none dark:shadow-md dark:bg-zinc-900
          "
          onClick={(e) => {
            e.stopPropagation();
            setOpenId(isOpen ? null : item.id);
          }}
          aria-label={
            isOpen ? "Collapse course details" : "Expand course details"
          }
        >
          {/* Button Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#ff8533] to-[#ffa366]"
            animate={isOpen ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.2 }}
          />

          {/* Plus/Close Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="relative z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <motion.path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={`content-${item.id}`}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 24,
            }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#ff8533]" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Course Details
                </p>
              </div>

              <ul className="space-y-3">
                {item.description.map((description, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex gap-3"
                  >
                    <motion.div
                      className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#ff8533] to-[#ffa366] flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    />
                    <span>{description}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 mt-6"
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
