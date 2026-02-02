// import ClientsCard from "./clientCards";

// export default function MainClientPage() {
//   return (
//     <section className="py-24">
//       <div className="text-center">
//         <h1 className="text-3xl text-white font-bold">Our Clients</h1>

//         <p className="text-sm mt-2 text-white/70">
//           <span className="text-green-400 text-lg">✔ </span>
//           We work with organizations that value clarity, expertise, and
//           meaningful development across diverse sectors.
//         </p>
//       </div>

//       <ClientsCard />
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { itemVariants, lineVariants, paragraghVariant } from "../variants";
import ClientsCard from "./clientCards";

export default function MainClientPage() {
  return (
    <section className="py-24">
      <div className="mb-10 flex items-center justify-center flex-col mx-auto ">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className=" text-3xl font-semibold "
        >
          Our Clients{" "}
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
          We work with organizations that value clarity, expertise, and
          meaningful development across diverse sectors.
        </motion.p>
      </div>

      <ClientsCard />
    </section>
  );
}
