"use clinet ";
import { motion, Variants } from "framer-motion";
export default function WhyChooseUs() {
  return (
    <section className="py-24 mt-10 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h1
            className="text-xl md:text-3xl  font-semibold tracking-tight"
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            whileInView={{ letterSpacing: "normal", opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.83, 0, 0.17, 1],
            }}
          >
            Why Choose Us ?
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
            className="text-base text-gray-500 dark:text-gray-300  mb-16 max-w-md mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            Because expertise, clarity, and impact make the difference.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className=" dark:bg-zinc-900/90
                        relative
                        h-full
                        rounded-3xl
                        p-8
                        
                        border-2 
                        overflow-hidden
                        group
                      
                        border-zinc-100 dark:border-zinc-800 shadow-lg hover:shadow-xl dark:shadow-zinc-800/20 dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
                        flex
                    "
          >
            <div className="relative flex flex-col h-full gap-6">
              {/* Top */}
              <div className="flex items-start gap-6">
                <div
                  className="w-20 h-20 min-w-[80px] rounded-3xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#FF5B25",
                    boxShadow: "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <img
                    src="/commit.png"
                    alt="Commitment"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                <div>
                  <h2 className=" text-xl font-bold mb-2">
                    Expert-Led Consulting & Training
                  </h2>
                  <p className=" text-sm text-gray-600 dark:text-gray-300">
                    We deliver practical consulting and training solutions led
                    by experienced professionals who understand real business
                    challenges and provide actionable insights.
                  </p>
                </div>
              </div>

              <div className="flex-grow" />

              <div
                className="h-[2px] w-10 bg-primary transition-all
                                duration-300
                                ease-out
                                group-hover:w-14
                            "
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            }}
            className="dark:bg-zinc-900/90
                        relative
                        h-full
                        rounded-3xl
                        p-8
                        
                        border 
                        overflow-hidden
                        group
                       
                        border-zinc-100 dark:border-zinc-800 shadow-lg hover:shadow-xl dark:shadow-zinc-800/20 dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
                        
                        flex
                    "
          >
            <div className="relative flex flex-col h-full gap-6">
              <div className="flex items-start gap-6">
                <div
                  className="w-20 h-20 min-w-[80px] rounded-3xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#FF5B25",
                    boxShadow: "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <img
                    src="/customizee.png"
                    alt="Commitment"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                <div>
                  <h2 className=" text-xl font-bold mb-2">
                    Customized Solutions
                  </h2>
                  <p className=" text-sm text-gray-600 dark:text-gray-300">
                    Our services are tailored to your organization’s specific
                    needs, ensuring strategies and training programs that align
                    perfectly with your goals and industry.
                  </p>
                </div>
              </div>

              <div className="flex-grow" />

              <div
                className="h-[2px] w-10 bg-primary transition-all
                                duration-300
                                ease-out
                                group-hover:w-14
                            "
              />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.6,
            }}
            className="dark:bg-zinc-900/90
                        relative
                        h-full
                        rounded-3xl
                        p-8
                        
                        border 
                        overflow-hidden
                        group
                       
                        border-zinc-100 dark:border-zinc-800 shadow-lg hover:shadow-xl dark:shadow-zinc-800/20 dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
                        
                        flex
                    "
          >
            <div className="relative flex flex-col h-full gap-6">
              <div className="flex items-start gap-6">
                <div
                  className="w-20 h-20 min-w-[80px] rounded-3xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#FF5B25",
                    boxShadow: "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <img
                    src="/yy.png"
                    alt="Commitment"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                <div>
                  <h2 className=" text-xl font-bold mb-2">
                    Proven Methodologies
                  </h2>
                  <p className=" text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    We apply tested frameworks and best practices that drive
                    measurable improvement in performance, efficiency, and
                    decision-making.
                  </p>
                </div>
              </div>

              <div className="flex-grow" />
              <div
                className="h-[2px] w-10 bg-primary transition-all
                                duration-300
                                ease-out
                                group-hover:w-14
                            "
              />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8,
            }}
            className="dark:bg-zinc-900/90
                        relative
                        h-full
                        rounded-3xl
                        p-8
                        
                        border 
                        overflow-hidden
                        group
                        
                        border-zinc-100 dark:border-zinc-800 shadow-lg hover:shadow-xl dark:shadow-zinc-800/20 dark:hover:shadow-xl dark:hover:shadow-zinc-800/20
                        
                        flex
                    "
          >
            <div className="relative flex flex-col h-full gap-6">
              <div className="flex items-start gap-6">
                <div
                  className="w-20 h-20 min-w-[80px] rounded-3xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#FF5B25",
                    boxShadow: "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <img
                    src="/sustainable.png"
                    alt="Commitment"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                <div>
                  <h2 className=" text-xl font-bold mb-2">
                    Sustainable Impact
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 ">
                    Our focus goes beyond short-term results. We build long-term
                    capabilities within your team to ensure continuous growth
                    and lasting success.
                  </p>
                </div>
              </div>

              <div className="flex-grow" />

              <div
                className="h-[2px] w-10 bg-primary transition-all
                                duration-300
                                ease-out
                                group-hover:w-14
                            "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
