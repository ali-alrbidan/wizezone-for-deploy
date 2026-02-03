"use client";

import { useState } from "react";
import type { CourseUI } from "../hooks/useCourses";
import CourseCard from "./courseCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface CourseListProps {
  courses: CourseUI[];
}

export default function CourseList({ courses }: CourseListProps) {
  const t = useTranslations("CourseList");
  console.log(courses);
  const [openId, setOpenId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30, rotateY: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CourseCard item={course} openId={openId} setOpenId={setOpenId} />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      {courses.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff8533] to-[#ffa366] text-white font-medium hover:shadow-xl hover:shadow-[#ff8533]/25 dark:hover:shadow-[#ff8533]/40 transition-all duration-300"
          >
            {t("viewAll")}
          </motion.button>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            {t("showingCount", {
              count: courses.length,
              total: courses.length,
            })}
          </p>
        </motion.div>
      )}
    </motion.section>
  );
}
