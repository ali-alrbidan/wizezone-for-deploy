"use client";
import { motion, useInView } from "framer-motion";
import { Navigation } from "lucide-react";
import { useEffect, useRef as useReactRef, useRef, useState } from "react";

export default function StyledGoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInitialized = useRef(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const containerRef = useReactRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const shimmerAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  };

  useEffect(() => {
    if (!mapRef.current) return;

    const tryInitMap = () => {
      if (
        window.google &&
        window.google.maps &&
        mapRef.current &&
        !mapInitialized.current
      ) {
        mapInitialized.current = true;
        setIsMapLoaded(true);

        const center = {
          lat: 32.029129992022014,
          lng: 35.86536502181584,
        };

        const isDarkMode = document.documentElement.classList.contains("dark");

        const mapStyles = isDarkMode
          ? [
              { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#e2e8f0" }],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "transparent" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#334155", weight: 1.5 }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#cbd5e1" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#1e293b" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#475569" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#172554" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#60a5fa" }],
              },
              {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#0f172a" }],
              },
              {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [{ color: "#1e293b" }],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#cbd5e1" }],
              },
              { featureType: "poi", stylers: [{ visibility: "off" }] },
              { featureType: "transit", stylers: [{ visibility: "off" }] },
            ]
          : [
              { elementType: "geometry", stylers: [{ color: "#f8fafc" }] },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#334155" }],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "transparent" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#e2e8f0", weight: 1.5 }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#475569" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#f1f5f9" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#cbd5e1" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e0f2fe" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#0ea5e9" }],
              },
              {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#f0f9ff" }],
              },
              {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [{ color: "#f1f5f9" }],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#475569" }],
              },
              { featureType: "poi", stylers: [{ visibility: "off" }] },
              { featureType: "transit", stylers: [{ visibility: "off" }] },
            ];

        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom: 5,
          disableDefaultUI: true,
          styles: mapStyles,
        });

        let zoomLevel = 5;
        const zoomInterval = setInterval(() => {
          if (zoomLevel < 15) {
            zoomLevel += 0.5;
            map.setZoom(zoomLevel);
          } else {
            clearInterval(zoomInterval);
          }
        }, 80);

        const marker = new window.google.maps.Marker({
          position: center,
          map,
          animation: window.google.maps.Animation.DROP,
          icon: {
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "#f97316",
            fillOpacity: 1,
            strokeColor: isDarkMode ? "#0f172a" : "#ffffff",
            strokeWeight: 2,
            scale: 1.8,
            anchor: new window.google.maps.Point(12, 24),
          },
        });

        const pulseCircle = new window.google.maps.Circle({
          strokeColor: "#f97316",
          strokeOpacity: isDarkMode ? 0.2 : 0.3,
          strokeWeight: 1,
          fillColor: "#f97316",
          fillOpacity: isDarkMode ? 0.05 : 0.1,
          map,
          center: center,
          radius: 30,
        });

        let radius = 30;
        let growing = true;
        setInterval(() => {
          if (growing) {
            radius += 2;
            if (radius > 50) growing = false;
          } else {
            radius -= 2;
            if (radius < 30) growing = true;
          }
          pulseCircle.setRadius(radius);
        }, 200);

        const directionsUrl = `https://www.google.com/maps/dir//Wise+Zone+Training+And+Consulting,+Yajouz+Road,+Rabbath+Ammon/@32.0289572,35.8654294,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x151c9faa4cd9fdc1:0x421058cf22cd18df!2m2!1d35.8654294!2d32.0289572!3e0?entry=ttu`;

        const infoWindowContent = isDarkMode
          ? `
          <div style="position: relative; min-width: 280px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">

            <!-- Glow Effect -->
            <div style="
              position: absolute;
              inset: -8px;
              border-radius: 20px;
              background: radial-gradient(
                circle at center,
                rgba(249,115,22,0.15) 0%,
                rgba(251,191,36,0.1) 50%,
                transparent 80%
              );
              filter: blur(8px);
              z-index: 0;
            "></div>

            <!-- Card -->
            <div style="
              position: relative;
              z-index: 1;
              background: rgba(15, 23, 42, 0.95);
              backdrop-filter: blur(20px);
              border-radius: 16px;
              padding: 20px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(249,115,22,0.2);
              border: 1px solid rgba(249,115,22,0.3);
              color: #e2e8f0;
            ">
              
              <!-- Header -->
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: linear-gradient(135deg, #f97316, #fb923c);
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 21.7C17.3 17 20 13 20 9a8 8 0 1 0-16 0c0 4 2.7 8 8 12.7z"/>
                    <circle cx="12" cy="9" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 style="margin: 0; font-size: 18px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">
                    Wise Zone
                  </h3>
                  <p style="margin: 4px 0 0 0; font-size: 13px; color: #cbd5e1; font-weight: 500;">
                    Training & Consulting
                  </p>
                </div>
              </div>

              <!-- Divider -->
              <div style="
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
                margin: 16px 0;
              "></div>

              <!-- Address -->
              <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
                <div style="color: #f97316; flex-shrink: 0;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p style="margin: 0; font-size: 13.5px; color: #94a3b8; line-height: 1.5;">
                  Yajouz Road, Rabbath Ammon<br/>
                  Jordan
                </p>
              </div>

              <!-- CTA Button -->
              <a href="${directionsUrl}" target="_blank" style="
                display: block;
                margin-top: 20px;
                padding: 12px 20px;
                background: linear-gradient(135deg, #f97316, #fb923c);
                color: white;
                text-decoration: none;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                letter-spacing: 0.01em;
                box-shadow: 0 4px 20px rgba(249,115,22,0.3);
              " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 25px rgba(249,115,22,0.4)'" 
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(249,115,22,0.3)'">
                Get Directions
                <span style="margin-left: 8px; font-size: 12px;">→</span>
              </a>

            </div>

          </div>
        `
          : `
          <div style="position: relative; min-width: 280px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">

            <!-- Glow Effect -->
            <div style="
              position: absolute;
              inset: -8px;
              border-radius: 20px;
              background: radial-gradient(
                circle at center,
                rgba(249,115,22,0.15) 0%,
                rgba(251,191,36,0.1) 50%,
                transparent 80%
              );
              filter: blur(8px);
              z-index: 0;
            "></div>

            <!-- Card -->
            <div style="
              position: relative;
              z-index: 1;
              background: white;
              backdrop-filter: blur(20px);
              border-radius: 16px;
              padding: 20px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(249,115,22,0.1);
              border: 1px solid rgba(249,115,22,0.2);
              color: #1e293b;
            ">
              
              <!-- Header -->
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: linear-gradient(135deg, #f97316, #fb923c);
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 21.7C17.3 17 20 13 20 9a8 8 0 1 0-16 0c0 4 2.7 8 8 12.7z"/>
                    <circle cx="12" cy="9" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 style="margin: 0; font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.01em;">
                    Wise Zone
                  </h3>
                  <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b; font-weight: 500;">
                    Training & Consulting
                  </p>
                </div>
              </div>

              <!-- Divider -->
              <div style="
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent);
                margin: 16px 0;
              "></div>

              <!-- Address -->
              <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
                <div style="color: #f97316; flex-shrink: 0;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p style="margin: 0; font-size: 13.5px; color: #475569; line-height: 1.5;">
                  Yajouz Road, Rabbath Ammon<br/>
                  Jordan
                </p>
              </div>

              <!-- CTA Button -->
              <a href="${directionsUrl}" target="_blank" style="
                display: block;
                margin-top: 20px;
                padding: 12px 20px;
                background: linear-gradient(135deg, #f97316, #fb923c);
                color: white;
                text-decoration: none;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                letter-spacing: 0.01em;
                box-shadow: 0 4px 20px rgba(249,115,22,0.2);
              " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 25px rgba(249,115,22,0.3)'" 
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(249,115,22,0.2)'">
                Get Directions
                <span style="margin-left: 8px; font-size: 12px;">→</span>
              </a>

            </div>

          </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoWindowContent,
        });

        setTimeout(() => {
          infoWindow.open(map, marker);
        }, 1500);

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    };

    tryInitMap();
    const interval = setInterval(tryInitMap, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className=" md:mt-10 relative py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-blue-50/50" />

        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/40" />

        <motion.div
          //@ts-ignore

          animate={floatAnimation}
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-100/40 to-amber-100/40 dark:from-orange-900/20 dark:to-amber-900/20 rounded-full blur-3xl"
        />
        <motion.div
          //@ts-ignore

          animate={floatAnimation}
          style={{ animationDelay: "1s" }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-transparent via-orange-50/20 to-transparent dark:via-orange-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="mb-10 flex items-center justify-center mx-auto">
            <motion.h2
              //@ts-ignore

              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Find Our{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-500 dark:to-amber-500 bg-clip-text text-transparent">
                  Campus
                </span>
                <motion.span
                  //@ts-ignore

                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400 rounded-full"
                />
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className=" md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Visit our state-of-the-art training center in the heart of Amman.
            We're easily accessible and ready to welcome you for transformative
            learning experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=""
        >
          <motion.div
            //@ts-ignore
            variants={itemVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="relative group">
              {!isMapLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl flex items-center justify-center z-10 border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-orange-500 rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 dark:text-gray-400">
                      Loading interactive map...
                    </p>
                  </div>
                </div>
              )}

              <motion.div
                //@ts-ignore
                animate={shimmerAnimation}
                className="absolute -inset-4 bg-gradient-to-r from-orange-100/30 via-amber-100/30 to-orange-100/30 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-orange-900/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    ref={mapRef}
                    className="w-full h-[500px] rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-300/30 dark:shadow-gray-900/30 transition-all duration-500 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:shadow-orange-200/20 dark:group-hover:shadow-orange-900/20"
                  />
                </motion.div>

                <motion.a
                  href="https://www.google.com/maps/dir//Wise+Zone+Training+And+Consulting,+Yajouz+Road,+Rabbath+Ammon/@32.0289572,35.8654294,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x151c9faa4cd9fdc1:0x421058cf22cd18df!2m2!1d35.8654294!2d32.0289572!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-6 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 z-20"
                >
                  <Navigation className="w-4 h-4" />
                  Start Navigation
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-16 w-3 h-3 bg-amber-400 rounded-full opacity-40"
      />
    </section>
  );
}
