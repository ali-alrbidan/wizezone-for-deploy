"use client";
import { itemVariants, lineVariants, paragraghVariant } from "@/app/variants";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <section className="mt-6 space-y-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-center justify-center flex-col mx-auto gap-y-5">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className=" text-3xl font-semibold "
          >
            Our Courses
            <motion.span
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className=" bg-primary  h-[3px] block mt-2 "
            />
          </motion.h2>
          <motion.p
            variants={paragraghVariant}
            initial="hidden"
            whileInView="visible"
            className="text-gray-600 dark:text-gray-300 text-center mx-auto max-sm:px-1"
          >
            Glimpses of our journey in developing skills and creating success.
          </motion.p>
        </div>
      </div>

      {/*  <div className="overflow-hidden rounded-3xl bg-white/5 p-2 ring-1 ring-white/10 flex justify-center">
            <img
            src="./wisewhite.png"
            alt="Our Courses Image"
            className="h-[100vh] max-h-[500px] min-h-[200px] w-[70%] rounded-2xl object-cover"/>
            </div> */}
    </section>
  );
}

// "use client";
// import { motion } from "framer-motion";
// export default function Banner() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
//     visible: {
//       y: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   return (
//     <motion.section
//       className="mt-6 space-y-8 relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <div className="absolute inset-0 -z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/20 dark:via-black/20 dark:to-black/20" />
//         <img
//           src="/wisewhite.png"
//           alt="Our Courses Background"
//           className="w-full h-full object-cover object-center scale-110"
//         />

//         <motion.div className="absolute inset-0 dark:bg-black/50  scale-110" />
//       </div>
//     </motion.section>
//   );
// }
