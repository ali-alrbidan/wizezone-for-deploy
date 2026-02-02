import StyledGoogleMap from "../GoogleMap/GoogleMap";

export default function ContactSection() {
  const socials = [
    { icon: "/twitter.svg", alt: "Twitter", link: "https://x.com/wisezonejo/" },
    {
      icon: "/facebook.svg",
      alt: "Facebook",
      link: "https://www.facebook.com/Wisezonejo/",
    },
    {
      icon: "/insta.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/wisezonejo/",
    },
    {
      icon: "/linkdin.svg",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/company/wise-zone/",
    },
    {
      icon: "/youtube.svg",
      alt: "YouTube",
      link: "https://www.youtube.com/channel/UCF7K3XbLEaAPozofwQc3Ajw/videos",
    },
  ];

  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-2  sm:px-6 sm:mt-24  ">
        <div
          className="
          
            dark:bg-zinc-900
            shadow-lg         
            border-2 border-gray-100 dark:border-zinc-800
            rounded-3xl
            backdrop-blur-md
            px-8 lg:px-12
            py-10 lg:py-12
            grid grid-cols-1 lg:grid-cols-2
            gap-10
            transition-all duration-300 ease-out
            
            hover:-translate-y-[2px]
             
          "
        >
          {/* left */}
          <div>
            <h2 className=" text-4xl text-left font-bold mb-2">Wise Zone</h2>
            <p className=" text-sm leading-relaxed mb-10">
              Wise Zone Training And Consulting
            </p>

            <div className="flex items-center gap-2 mb-20">
              {socials.map((s, index) => (
                <a
                  key={index}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                            w-10 h-10 
                            rounded-full 
                            bg-white 
                            border border-primary border-x-2 border-y-2

                            flex items-center justify-center
                            hover:bg-[#c8c9d0]
                            transition
                        "
                >
                  <img src={s.icon} alt={s.alt} className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex items-start gap-4 mb-12">
              <img
                src="/location.svg"
                alt="Location"
                className="w-[30px] h-[30px]"
              />

              <p className=" text-sm leading-relaxed">
                Amman-Al jubiha-yajouz St. Building #67 – P.Box : 2722 <br />–
                Amman, Jordan : 11953
              </p>
            </div>

            <div className="flex items-center gap-4 mb-12">
              <img src="/email.png" alt="Email" className="w-6 h-6" />

              <a
                href="mailto:info@wisezone-jo.com"
                className="/80 text-sm underline hover: transition"
              >
                info@wisezone-jo.com
              </a>
            </div>

            <div className="flex items-start gap-4 md-12">
              <img src="/phone.svg" alt="Phone" className="w-[30px] h-[30px]" />

              <p className=" text-sm leading-relaxed">
                +962-79-9509497, +962-79-0976881
              </p>
            </div>
          </div>

          {/* right */}
          <div>
            <h2 className=" text-3xl font-bold mb-2">
              Let’s Discuss Your Needs
            </h2>

            <p className=" text-sm leading-relaxed mb-6">
              Let’s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="
                           text-zinc-600 dark:text-zinc-300
                        w-full
                        dark:bg-zinc-800/50
                        
                        border-2 dark:border-zinc-700/50
                        rounded-xl
                        px-4 py-3
                        
placeholder-gray-400
                    dark:placeholder-white/40                        focus:outline-none focus:border-primary/60 focus:dark:border-primary/40
                    "
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="
                  text-zinc-600 dark:text-zinc-300
                        w-full
                        dark:bg-zinc-800/50
                        
                        border-2 dark:border-zinc-700/50
                        rounded-xl
                        px-4 py-3
                        
placeholder-gray-400
                    dark:placeholder-white/40                        focus:outline-none focus:border-primary/60 focus:dark:border-primary/40
                    "
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="
                mb-4
                    text-zinc-600 dark:text-zinc-300
                        w-full
                        dark:bg-zinc-800/50
                        
                        border-2 dark:border-zinc-700/50
                        rounded-xl
                        px-4 py-3
                        
placeholder-gray-400
                    dark:placeholder-white/40                        focus:outline-none focus:border-primary/60 focus:dark:border-primary/40
                    "
              />

              <textarea
                placeholder="Message"
                rows={5}
                className="
                mb-4
                      text-zinc-600 dark:text-zinc-300
                        w-full
                        dark:bg-zinc-800/50
                        
                        border-2 dark:border-zinc-700/50
                        rounded-xl
                        px-4 py-3
                        
placeholder-gray-400
                    dark:placeholder-white/40                        focus:outline-none focus:border-primary/60 focus:dark:border-primary/40 resize-none
                    "
              />

              {/* Submit */}
              <button
                className="
                    w-full
                    bg-gradient-to-b from-[#F9743C] to-primary
                    text-white
                    py-3
                    rounded-xl
                    font-medium
                    hover:opacity-80
                    transition
                    "
              >
                Send it to Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <StyledGoogleMap />
    </section>
  );
}
