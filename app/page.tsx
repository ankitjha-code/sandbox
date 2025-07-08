"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Video, Mic, Phone } from "lucide-react";
import Image from "next/image";
const firstPageLogos = [
  {
    id: 1,
    name: "📁",
    color: "bg-blue-100 text-blue-600",
    position: { x: -600, y: -450 },
  }, // Left
  { id: 2, name: "PDF", color: "bg-red-500", position: { x: -660, y: -180 } }, // Left
  { id: 3, name: "⚫", color: "bg-gray-800", position: { x: -550, y: -30 } }, // Left
  {
    id: 4,
    name: "N",
    color: "bg-gray-200 text-gray-800",
    position: { x: -470, y: -280 },
  }, // Left

  {
    id: 5,
    name: "⭐",
    color: "bg-purple-100 text-purple-600",
    position: { x: 500, y: -450 },
  }, // Right
  {
    id: 6,
    name: "🔥",
    color: "bg-orange-100 text-orange-600",
    position: { x: 630, y: -180 },
  }, // Right
  {
    id: 7,
    name: "❄️",
    color: "bg-blue-100 text-blue-600",
    position: { x: 550, y: -30 },
  }, // Right
  {
    id: 8,
    name: "⊞",
    color: "bg-green-100 text-green-600",
    position: { x: 400, y: -280 },
  }, // Right

  {
    id: 9,
    name: "📊",
    color: "bg-blue-100 text-blue-600",
    position: { x: -355, y: 13 },
  }, // Bottom
  {
    id: 10,
    name: "📁",
    color: "bg-blue-100 text-blue-600",
    position: { x: 305, y: 13 },
  }, // Bottom
  {
    id: 11,
    name: "📄",
    color: "bg-blue-100 text-blue-600",
    position: { x: 0, y: 25 },
  }, // Bottom
];

const secondPageLogos = [
  {
    id: 11,
    name: "📹",
    color: "bg-blue-100 text-blue-600",
    finalPosition: { x: -80, y: -60 },
    isVideoIcon: true,
  },
  {
    id: 12,
    name: "PDF",
    color: "bg-red-500",
    finalPosition: { x: -20, y: -60 },
  },
  {
    id: 13,
    name: "⚫",
    color: "bg-gray-800",
    finalPosition: { x: 40, y: -60 },
  },
  {
    id: 14,
    name: "N",
    color: "bg-gray-200 text-gray-800",
    finalPosition: { x: 100, y: -60 },
  },
  {
    id: 15,
    name: "⭐",
    color: "bg-purple-100 text-purple-600",
    finalPosition: { x: -80, y: 0 },
  },
  {
    id: 16,
    name: "🔥",
    color: "bg-orange-100 text-orange-600",
    finalPosition: { x: -20, y: 0 },
  },
  {
    id: 17,
    name: "❄️",
    color: "bg-blue-100 text-blue-600",
    finalPosition: { x: 40, y: 0 },
  },
  {
    id: 18,
    name: "📁",
    color: "bg-blue-100 text-blue-600",
    finalPosition: { x: 100, y: 0 },
  },
  {
    id: 19,
    name: "⊞",
    color: "bg-green-100 text-green-600",
    finalPosition: { x: -80, y: 60 },
  },
  {
    id: 20,
    name: "📊",
    color: "bg-blue-100 text-blue-600",
    finalPosition: { x: -20, y: 60 },
  },
  {
    id: 21,
    name: "📄",
    color: "bg-blue-100 text-blue-600",
    finalPosition: { x: 40, y: 60 },
  },
  {
    id: 22,
    name: "tally",
    color: "bg-gray-100 text-gray-800",
    finalPosition: { x: 100, y: 60 },
  },
];

const companies = [
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
  { name: "trovatrip", logo: "🌍" },
  { name: "TrustLayer", logo: "🛡️" },
  { name: "Zipline", logo: "⚡" },
  { name: "strapi", logo: "📦" },
  { name: "choose", logo: "✨" },
  { name: "MOKA CARE", logo: "☕" },
  { name: "fab", logo: "🏗️" },
];

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1);
  const [animationState, setAnimationState] = useState("initial");
  const [visibleLogos, setVisibleLogos] = useState<number[]>([]);
  const [absorbedLogos, setAbsorbedLogos] = useState<number[]>([]);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const dashboardTopRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);

  // Disable scroll if locked
  useEffect(() => {
    document.body.style.overflow = scrollLocked ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // <- ✅ no return value here
    };
  }, [scrollLocked]);
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate logos one-by-one on FIRST page load
  useEffect(() => {
    if (currentPage === 1 && visibleLogos.length === 0) {
      firstPageLogos.forEach((logo, index) => {
        setTimeout(() => {
          setVisibleLogos((prev) => [...prev, logo.id]);
        }, index * 200);
      });
    }
  }, [currentPage, visibleLogos]);

  // Handle scroll interactions
  useEffect(() => {
    const handleInitialScroll = (e: WheelEvent) => {
      if (!hasScrolled && currentPage === 1 && e.deltaY > 0) {
        e.preventDefault();
        setHasScrolled(true);
        setScrollLocked(true);
        startAbsorptionAnimation();
      } else if (scrollLocked && currentPage === 1) {
        e.preventDefault();
      }
    };

    const handleBackScroll = (e: WheelEvent) => {
      if (
        currentPage === 2 &&
        containerRef.current &&
        containerRef.current.scrollTop <= 0 &&
        e.deltaY < 0
      ) {
        e.preventDefault();
        goBackToFirstPage();
      }
    };

    const container = containerRef.current;
    if (currentPage === 1)
      window.addEventListener("wheel", handleInitialScroll, { passive: false });
    if (currentPage === 2)
      container?.addEventListener("wheel", handleBackScroll, {
        passive: false,
      });

    return () => {
      window.removeEventListener("wheel", handleInitialScroll);
      container?.removeEventListener("wheel", handleBackScroll);
    };
  }, [currentPage, hasScrolled, scrollLocked]);

  const startAbsorptionAnimation = () => {
    setAnimationState("absorbing");
    const sortedLogos = [...firstPageLogos]
      .map((logo) => ({
        ...logo,
        distance: Math.sqrt(logo.position.x ** 2 + logo.position.y ** 2),
      }))
      .sort((a, b) => a.distance - b.distance);

    sortedLogos.forEach((logo, index) => {
      setTimeout(() => {
        setAbsorbedLogos((prev) => [...prev, logo.id]);
      }, index * 150);
    });

    setTimeout(() => {
      setAnimationState("complete");
      setCurrentPage(2);
      setVisibleLogos([]);
      setScrollLocked(false);
      setTimeout(() => {
        secondPageLogos.forEach((logo, index) => {
          setTimeout(() => {
            setVisibleLogos((prev) => [...prev, logo.id]);
          }, index * 200);
        });
      }, 1000);
    }, 2000);
  };

  const goBackToFirstPage = () => {
    setScrollLocked(true);
    setCurrentPage(1);
    setAnimationState("initial");
    setVisibleLogos([]);
    setAbsorbedLogos([]);
    setHasScrolled(false);
    setTimeout(() => {
      firstPageLogos.forEach((logo, index) => {
        setTimeout(() => {
          setVisibleLogos((prev) => [...prev, logo.id]);
        }, index * 200);
      });
      setTimeout(() => {
        setScrollLocked(false);
      }, firstPageLogos.length * 200 + 500);
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className={`h-screen bg-gray-50 ${
        currentPage === 1 ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl text-black font-semibold">Cycle</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button className="text-gray-700 hover:text-gray-900 flex items-center">
                Product <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                Changelog
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                Manifesto
              </button>
              <button className="text-gray-700 hover:text-gray-900 flex items-center">
                Resources <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                Log in
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className={`pt-16 relative ${
          currentPage === 1 ? "h-full overflow-hidden" : "min-h-screen"
        }`}
      >
        <AnimatePresence mode="wait">
          {currentPage === 1 ? (
            <motion.div
              key="page1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
            >
              {/* First Page Content - Autopilot Landing */}
              <div className="text-center relative z-10 max-w-4xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                >
                  Your feedback hub,
                  <br />
                  on autopilot
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
                >
                  Cycle is the fastest way for your team to capture product
                  feedback and share customer insights – without the busywork.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 flex justify-center relative z-20"
                >
                  <div
                    id="drop-box"
                    className="relative border border-gray-300 rounded-2xl p-10 pt-16 w-full max-w-md bg-white shadow-xl min-h-[200px] flex flex-col items-center justify-end"
                  >
                    {/* Sphere INSIDE box */}
                    <motion.div
                      className="absolute top-[40px] left-2/5 transform z-10"
                      animate={
                        animationState === "processing"
                          ? { rotate: 360, scale: [1, 1.1, 1] }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{
                        duration: 2,
                        ease: "linear",
                        repeat:
                          animationState === "processing"
                            ? Number.POSITIVE_INFINITY
                            : 0,
                      }}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center">
                        <AnimatePresence>
                          {animationState === "processing" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-white font-semibold text-xs sm:text-sm"
                            >
                              Processing...
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Drop Text */}
                    <p className="text-gray-500 text-sm sm:text-base text-center mt-8">
                      <span className="font-semibold text-gray-900">
                        Drop anything
                      </span>{" "}
                      <span className="text-gray-400">to capture feedback</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="page2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              /// <reference path="" />
              ref={dashboardTopRef}
              className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 sm:p-6 lg:p-8 pb-20 mx-auto"
            >
              {/* Left Sidebar - Video + Logo Grid + Sphere */}
              <div className="lg:col-span-1 flex flex-col space-y-6">
                {/* Video Call Interface */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="bg-gray-900 rounded-lg h-48 sm:h-56 lg:h-64 relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=256&width=400"
                      alt="Video call participant"
                      width={400}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                          <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                          <Video className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                      </div>
                      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Logo Grid - 3x4 Grid ABOVE Sphere */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="grid grid-cols-4 gap-3 w-full max-w-xs">
                    {secondPageLogos.map((logo, index) => {
                      const isVisible = visibleLogos.includes(logo.id);

                      return (
                        <motion.div
                          key={logo.id}
                          className={`w-12 h-12 ${
                            logo.color
                          } rounded-xl flex items-center justify-center font-semibold text-xs shadow-lg ${
                            logo.isVideoIcon ? "border-2 border-blue-200" : ""
                          }`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={
                            isVisible
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0 }
                          }
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: isVisible ? index * 0.1 : 0,
                          }}
                        >
                          {logo.name}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Sphere BELOW the grid */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-2xl"></div>
                </div>
              </div>

              {/* Right Side - Dashboard Cards (2x2 Grid) */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Top Feature Requests */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-blue-500 mr-2">⚡</span>
                    <h3 className="font-semibold text-black text-sm sm:text-base">
                      Top feature requests
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[85, 70, 60, 45, 25].map((width, i) => (
                      <div
                        key={i}
                        className="h-3 bg-blue-200 rounded"
                        style={{ width: `${width}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Feedback Status */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-blue-500 mr-2">⚡</span>
                    <h3 className="font-semibold text-black text-sm sm:text-base">
                      Feedback status
                    </h3>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 relative">
                      <div className="absolute top-2 right-8 w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="absolute bottom-4 right-2 w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute bottom-2 right-4 w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Customers with most feedback */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-blue-500 mr-2">⚡</span>
                    <h3 className="font-semibold text-black text-sm sm:text-base">
                      Customers with most feedback
                    </h3>
                  </div>
                  <div className="flex space-x-1 items-end h-20 sm:h-24">
                    {[60, 40, 85, 30, 75, 25, 90, 35].map((height, i) => (
                      <div
                        key={i}
                        className="bg-pink-300 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Summary of customer quotes */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-blue-500 mr-2">⚡</span>
                    <h3 className="font-semibold text-black text-sm sm:text-base">
                      Summary of customer quotes
                    </h3>
                  </div>
                  <div className="w-20 sm:w-24 h-4 bg-green-400 rounded"></div>
                </div>
              </div>

              {/* Extra content to demonstrate scrolling */}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full bg-white">
          {/* Header with Book demo button */}
          <div className="flex justify-center pt-8 pb-16">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Book demo
            </button>
          </div>

          {/* Loved by section */}
          <div className="text-center mb-12">
            <h2 className="text-xl font-medium text-gray-700 mb-8">
              Loved by product folks at
            </h2>

            {/* Infinite scrolling logos */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 items-center"
                animate={{
                  x: [0, -100 * companies.length],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                style={{ width: `${300 * companies.length}%` }}
              >
                {/* First set of logos */}
                {companies.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-xl">{company.logo}</span>
                      <span className="text-base font-medium whitespace-nowrap">
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companies.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-xl">{company.logo}</span>
                      <span className="text-base font-medium whitespace-nowrap">
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Testimonial section */}
          <div className="max-w-4xl mx-auto px-8 py-16">
            <div className="relative">
              {/* Star icon */}
              <div className="absolute left-0 top-0">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-500 text-lg">⭐</span>
                </div>
              </div>

              {/* Quote mark */}
              <div className="absolute right-0 top-0">
                <div className="text-6xl text-blue-500 font-bold leading-none">
                  "
                </div>
              </div>

              {/* Main content */}
              <div className="flex items-start gap-8 pl-16 pr-16">
                {/* Profile image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Olivier Godement"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote and attribution */}
                <div className="flex-1">
                  <blockquote className="text-2xl font-medium text-gray-800 italic leading-relaxed mb-8">
                    &quot;Cycle is a slick AI tool that enables teams to build
                    better products by getting smarter on what their customers
                    want.&quot;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium">
                      Olivier Godement
                    </span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">O</span>
                      </div>
                      <span className="text-gray-700 font-medium">OpenAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Sphere - Only show on first page */}
        {/* {currentPage === 1 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            animate={
              animationState === "processing" ? { rotate: 360 } : { rotate: 0 }
            }
            transition={{
              duration: 2,
              ease: "linear",
              repeat:
                animationState === "processing" ? Number.POSITIVE_INFINITY : 0,
            }}
          >
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
              animate={
                animationState === "processing"
                  ? { scale: [1, 1.1, 1] }
                  : { scale: 1 }
              }
              transition={{
                duration: 1,
                repeat:
                  animationState === "processing"
                    ? Number.POSITIVE_INFINITY
                    : 0,
              }}
            >
              <AnimatePresence>
                {animationState === "processing" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white font-semibold text-xs sm:text-sm"
                  >
                    Processing...
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )} */}
        {/* Floating Logos - Only for first page */}
        {/* {currentPage === 1 && (
          <AnimatePresence>
            {firstPageLogos.map((logo) => {
              const isVisible = visibleLogos.includes(logo.id);
              const isAbsorbed = absorbedLogos.includes(logo.id);

              if (!isVisible) return null;

              return (
                <motion.div
                  key={`${currentPage}-${logo.id}`}
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 ${logo.color} rounded-xl flex items-center justify-center font-semibold text-xs shadow-lg z-10`}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: logo.position.x,
                    y: logo.position.y,
                  }}
                  animate={
                    isAbsorbed
                      ? {
                          opacity: 0,
                          scale: 0.3,
                          x: 0,
                          y: 0,
                        }
                      : {
                          opacity: 1,
                          scale: 1,
                          x: logo.position.x,
                          y: logo.position.y,
                        }
                  }
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: isAbsorbed ? 0.8 : 0.6,
                    ease: "easeInOut",
                    delay: isAbsorbed ? 0 : Math.random() * 0.3,
                  }}
                  style={{
                    left: "50%",
                    top: "calc(100% - 120px)", // approx sphere center inside box
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {logo.name}
                </motion.div>
              );
            })}
          </AnimatePresence>
        )} */}

        {/* Floating Logos - Only for first page */}
        {/* Floating Logos - ✅ Only once now */}
        {currentPage === 1 && (
          <AnimatePresence>
            {firstPageLogos.map((logo) => {
              const isVisible = visibleLogos.includes(logo.id);
              const isAbsorbed = absorbedLogos.includes(logo.id);

              if (!isVisible) return null;

              return (
                <motion.div
                  key={logo.id}
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 ${logo.color} rounded-xl flex items-center justify-center font-semibold text-xs shadow-lg z-10`}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: logo.position.x,
                    y: logo.position.y,
                  }}
                  animate={
                    isAbsorbed
                      ? {
                          opacity: 0,
                          scale: 0.3,
                          x: 0,
                          y: 0,
                        }
                      : {
                          opacity: 1,
                          scale: 1,
                          x: logo.position.x,
                          y: logo.position.y,
                        }
                  }
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: isAbsorbed ? 0.8 : 0.6,
                    ease: "easeInOut",
                    delay: isAbsorbed ? 0 : Math.random() * 0.3,
                  }}
                  style={{
                    left: "50%",
                    top: "calc(100% - 120px)", // aligns with sphere in drop-box
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {logo.name}
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}

        {/* Scroll Indicator */}
        {animationState === "initial" && !hasScrolled && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-400">
                Scroll to continue
              </span>
            </div>
          </motion.div>
        )}

        {/* Reverse scroll indicator on page 2 - only show when at absolute top */}
        {currentPage === 2 && animationState === "complete" && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            style={{
              display: atTop ? "flex" : "none",
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 rotate-180" />
              <span className="text-xs sm:text-sm text-gray-400">
                Scroll up to go back
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
