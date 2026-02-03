"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Import useTheme hook
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const locale = useLocale();
  const router = useRouter();

  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get theme from next-themes
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // Add mounted state

  const width = useTransform(scrollY, [0, 80], ["90%", "100%"]);
  const borderRadius = useTransform(scrollY, [0, 80], ["20px", "0px"]);
  const paddingX = useTransform(scrollY, [0, 80], ["40px", "48px"]);
  const paddingY = useTransform(scrollY, [0, 80], ["20px", "16px"]);
  const scale = useTransform(scrollY, [0, 80], [0.98, 1]);
  const top = useTransform(scrollY, [0, 80], [0, 10]);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const navLinks = [
    { name: t("links.home"), href: "/" },
    { name: t("links.services"), href: "/services" },
    { name: t("links.courses"), href: "/courses" },
    { name: t("links.clients"), href: "/clients" },
    { name: t("links.about"), href: "/about" },
    { name: t("links.trainingPolicy"), href: "/training-policy" },
  ];

  const languages = [
    { locale: "en", label: "English" },
    { locale: "ar", label: "عربي" }
  ]

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 flex justify-center">
        <div className="w-[90%] backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 border border-border  flex items-center justify-between px-10 py-5 rounded-2xl shadow-lg">
          {/* Skeleton logo */}
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          {/* Skeleton buttons */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </nav>
    );
  }

  const isDark = theme === "dark";
  return (
    <nav className={`sticky top-0  z-50 flex justify-center   `}>
      <motion.div
        style={{
          width,
          borderRadius,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          scale,
        }}
        className={`
          backdrop-blur-md backdrop-enhanced max-sm:!px-2 max-sm:!w-full max-sm:!rounded-none max-sm:!mx-0 max-sm:!scale-100
        bg-white/95
          dark:bg-zinc-900/95 border-gray-200 dark:border-slate-700/40 shadow-xl dark:shadow-zinc-900
          
          }
          border
          flex items-center justify-between
          will-change-transform
          shadow-lg
          transition-colors duration-300
        `}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={theme === "dark" ? "/logo.svg" : "/logo-dark-2.png"}
            className="h-10 md:h-12 md:w-28 animate-float"
            alt="Wise Zone Logo"
          />
        </motion.div>

        <ul className="hidden lg:flex gap-8 font-semibold text-[15px]">
          {navLinks.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`
                  relative transition-all duration-300
                  ${
                    isActive(item.href)
                      ? "text-primary"
                      : theme === "dark"
                        ? "text-[#C9CED6] hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }
                  hover:scale-105
                  inline-block
                `}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeLink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Languages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className={`
                  p-2.5 md:p-3 rounded-xl
                  ${
                    theme === "dark"
                      ? "bg-zinc-800 hover:bg-zinc-800/80"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                  transition-all duration-300
                  shadow-md
                  icon-rotate-hover
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t("aria.toggleLanguage")}
              >
                <Globe className="w-5 h-5 text-indigo-600 dark:text-gray-300" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/95 dark:bg-zinc-900/95 p-4 rounded-2xl">
              <DropdownMenuGroup>
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.locale}
                    className="rounded-xl cursor-pointer"
                    onClick={() => handleLanguageChange(l.locale)}>
                      {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`
              p-2.5 md:p-3 rounded-xl
              ${
                theme === "dark"
                  ? "bg-zinc-800 hover:bg-zinc-800/80"
                  : "bg-gray-100 hover:bg-gray-200"
              }
              transition-all duration-300
              shadow-md
              icon-rotate-hover
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t("aria.toggleTheme")}
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>

          {/* Search Button */}
          <motion.button
            className="max-sm:hidden bg-gradient-to-r from-primary to-[#ff8533] p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t("aria.search")}
          >
            <img
              src="/search-icon.svg"
              className="h-4 w-4 md:h-5 md:w-5"
              alt="Search"
            />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`
              lg:hidden p-2 rounded-lg
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
            aria-label={t("aria.toggleMenu")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`
            lg:hidden absolute top-[80px] left-0 right-0
          
            border rounded-lg p-6
            bg-white dark:bg-gray-900 shadow-2xl
            z-40
          `}
        >
          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    block py-2 px-4 rounded-lg transition-all
                    ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : theme === "dark"
                          ? "text-[#C9CED6] hover:text-white hover:bg-white/5"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
