"use clinet";
interface ServiceCardProps {
  title: string;
  items: string[];
  motionProps: any;
}

import { motion } from "framer-motion";
export function ServiceCard({ title, items, motionProps }: ServiceCardProps) {
  return (
    <motion.div
      {...motionProps}
      className="group  rounded-2xl p-6
      dark:bg-zinc-900/90
        backdrop-blur-md border-2 border-zinc-100 dark:border-zinc-800
         ease-out
        
        hover:-translate-y-[2px]
        shadow-lg hover:shadow-xl
        dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
      "
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div
          className="
            w-10 h-10
            rounded-full
            flex items-center justify-center
            shrink-0
            transition-transform duration-300 ease-out
            group-hover:rotate-[12deg]
            group-hover:scale-105
          "
          style={{
            backgroundColor: "#FF5B25",
            boxShadow: "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
          }}
        >
          <img src="/talk.svg" className="w-5 h-5" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold  leading-tight">{title}</h3>

          {/* Accent Line */}
          <span
            className="
              block
              w-6 h-[2px]
              bg-[#FF5B25]
              mt-2 mb-3
              transition-all duration-300
              group-hover:w-10
            "
          ></span>

          <ul className="space-y-0.5 text-[16px] text-[#A7ADC2]">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="text-[18px] leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
