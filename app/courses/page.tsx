// "use client";
// import Banner from "./components/banner";
// import CourseList from "./components/courseList";
// import { useCourses } from "./hooks/useCourses";

// export default function CoursesPage() {
//   const { courses, loading, error } = useCourses();

//   return (
//     <main className="min-h-screen bg-[#0B1A39] text-white">
//       <div className="mx-auto max-w-7xl px-6">
//         <Banner />

//         {loading && <p className="mt-10 text-white/60">Loading courses...</p>}

//         {error && <p className="mt-10 text-red-400">{error}</p>}

//         <CourseList courses={courses} />
//       </div>
//     </main>
//   );
// }

"use client";
import Banner from "./components/banner";
import CourseList from "./components/courseList";
import { useCourses } from "./hooks/useCourses";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const { courses, loading, error } = useCourses();

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

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Background Elements with Primary Color */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light Mode Background */}
        <div className="dark:hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff8533]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffa366]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-transparent via-[#ff8533]/10 to-transparent blur-3xl" />
        </div>

        {/* Dark Mode Background */}
      </div>

      <div className="relative z-10 mt-10 ">
        <Banner />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {loading && (
            <div className="mt-16 space-y-8">
              {/* Skeleton Loading Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-5 animate-pulse"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
                      </div>
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-500 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {error}
                </p>
              </div>
            </motion.div>
          )}

          {!loading && !error && courses.length > 0 && (
            <CourseList courses={courses} />
          )}

          {!loading && !error && courses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 text-center py-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff8533]/10 to-[#ffa366]/10 dark:from-[#ff8533]/20 dark:to-[#ffa366]/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                No Courses Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check back soon for new course offerings.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#ff8533] to-[#ffa366] text-white font-medium hover:shadow-lg hover:shadow-[#ff8533]/25 dark:hover:shadow-[#ff8533]/40 transition-all duration-300"
              >
                Get Notified
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
