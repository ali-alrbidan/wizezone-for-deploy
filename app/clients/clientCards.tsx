"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClientApi } from "../types";
export default function ClientsCard() {
  const [clients, setClients] = useState<ClientApi[]>();
  useEffect(() => {
    async function getClients() {
      const response = await fetch("/api/clients");
      const data = await response.json();
      setClients(data);
    }
    getClients();
  }, []);

  return (
    <section className="py-10 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {clients?.map((item) => {
            const Wrapper = item.Links ? motion.a : motion.div;

            return (
              <Wrapper
                initial={{
                  opacity: 0,
                  x: item.id % 2 === 0 ? -30 : 30,
                  rotateY: 45,
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                key={item.id}
                {...(item.Links && {
                  href: item.Links,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="
                                block

                                dark:bg-zinc-900
                                border-2 border-zinc-100 dark:border-zinc-800
                                rounded-2xl
                                p-5 max-sm:p-0 max-sm:pb-4
                                backdrop-blur-md
                              
                             
                                hover:-translate-y-[2px]
                                group
                                cursor-pointer
                                hover:shadow-xl
                            "
              >
                {/* Image Box */}
                <div
                  className="
                                w-full h-[220px]
                                rounded-2xl
                                dark:bg-zinc-900
                                backdrop-blur-md
                                
                              
                                flex items-center justify-center
                                overflow-hidden 
                                mb-4
                                 max-sm:p-0
shadow-sm group-hover:shadow-md                              
                            "
                >
                  {item.LogoUrl ? (
                    <Image
                      src={item.LogoUrl}
                      alt={item.EnName}
                      width={200}
                      height={200}
                      className="max-sm:p-3 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className=" text-sm">No Logo</span>
                  )}
                </div>

                {/* Client Name */}
                <h3
                  className="
                                text-center
                                text-gray-700 dark:text-gray-200
                                font-medium
                                transition-colors duration-300
                            
                                "
                >
                  {item.EnName}
                </h3>

                {/* Accent Line */}
                <span
                  className="
                                block
                                mx-auto
                                mt-3
                                w-8 h-[2px]
                                bg-[#FF6A00]
                                transition-all duration-300
                                group-hover:w-14
                                "
                />
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
