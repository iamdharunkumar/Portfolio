"use client"
import { Instagram, Linkedin, Github, Facebook, Palette } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/loader";
import Link from "next/link";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Define 5 color themes
  const colorThemes = useMemo(() => [
    "#cbf65e", // Original green
    "#1E47EB", // Blue
    "#4ecdc4", // Teal
    "#45b7d1", // Blue
    "#f9ca24", //purple
    '#7A08D1' // Yellow 
  ], []);

  // Define the sequence of texts to type
  const textSequence = [
    "Programmer", 
    "Tech Geek",
    "Software Engineer"
  ];

  const updateColor = useCallback((index: number) => {
    const color = colorThemes[index];
    document.documentElement.style.setProperty('--overall-color', color);
  }, [colorThemes]);

  useEffect(() => {
    setIsMounted(true);
    // Load saved color preference from localStorage
    const savedColorIndex = localStorage.getItem('portfolioColorIndex');
    if (savedColorIndex) {
      const index = parseInt(savedColorIndex);
      setColorIndex(index);
      updateColor(index);
    }
  }, [updateColor]);

  // Handle sequential typing animation
  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      if (currentTextIndex < textSequence.length - 1) {
        setCurrentTextIndex(prev => prev + 1);
      } else {
        setIsTypingComplete(true);
      }
    }, 3000); // Wait 3 seconds before moving to next text

    return () => clearTimeout(timer);
  }, [currentTextIndex, isMounted, textSequence.length]);

  const handleColorChange = () => {
    const newIndex = (colorIndex + 1) % colorThemes.length;
    setColorIndex(newIndex);
    updateColor(newIndex);
    // Save preference to localStorage
    localStorage.setItem('portfolioColorIndex', newIndex.toString());
  };

  const handleNavigation = (href: string) => {
    setIsNavigating(true);
    // Smooth transition to new page
    setTimeout(() => {
      window.location.href = href;
    }, 400);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader size="md" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden px-4 sm:px-8 md:px-16">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 ">
        {/* Video Loading Overlay */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <Loader size="md" className="text-[var(--overall-color)]" />
          </div>
        )}
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          onError={(e) => {
            console.error('Video error:', e);
            setIsVideoLoaded(true); // Show content even if video fails
          }}
        >
          <source src="/v2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
  
      {/* Color Theme Switcher - Bottom Right Corner */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* Desktop Version */}
        <button
          onClick={handleColorChange}
          className="hidden md:flex h-8 w-auto items-center space-x-2 px-3 py-2 bg-black/20 backdrop-blur-sm border border-gray-600/50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          title="Change theme color"
        >
          {/* Palette Icon */}
          <div className="flex items-center justify-center w-4 h-4">
            <Palette className="w-3 h-3 text-amber-500" />
          </div>
          
          {/* Text Label */}
          <span className="text-gray-300 text-xs font-medium whitespace-nowrap">
            Theme
          </span>
          
          {/* Color Indicator Circle */}
          <div className="w-4 h-4 rounded-full border border-white/70 flex-shrink-0" style={{ backgroundColor: colorThemes[colorIndex] }}></div>
        </button>

        {/* Mobile Version - Just Circle */}
        <button
          onClick={handleColorChange}
          className="md:hidden w-4 h-4 p-1 rounded-full border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
          style={{ backgroundColor: colorThemes[colorIndex] }}
          title="Change theme color"
        />
      </div>
      
      {/* Home Page Content with Smooth Exit Animation */}
      <AnimatePresence mode="wait">
        {!isNavigating && (
          <motion.div 
            key="home-content"
            className="relative z-10 min-h-screen flex items-center justify-center"
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: -100,
              transition: { 
                duration: 0.4, 
                ease: "easeInOut"
              }
            }}
          >
            {/* Centered Content Container */}
            <motion.div 
              className="w-full max-w-4xl mx-auto text-center"
              initial={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                y: -50,
                transition: { 
                  duration: 0.4, 
                  ease: "easeInOut"
                }
              }}
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-xl text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Hey, there! <span className="text-2xl">👋</span>
                </motion.p>
                <motion.div 
                  className="flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 leading-tight">
                    I&apos;m Dharunkumar
                  </h1>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center space-x-2 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">
                    a 
                  </p>
                  {!isTypingComplete ? (
                    <TypingAnimation 
                      className="text-xl sm:text-2xl md:text-3xl text-[var(--overall-color)]"
                      duration={100}
                    >
                      {textSequence[currentTextIndex]}
                    </TypingAnimation>
                  ) : (
                    <span className="text-xl sm:text-2xl md:text-3xl text-[var(--overall-color)] ">
                      Software Engineer
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Navigation below main content */}
              <motion.div 
                className="mt-16 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ul className="flex space-x-8">
                  <li>
                    <span className="text-[var(--overall-color)] border-b-2 border-[var(--overall-color)] pb-1 transition-colors">
                      Home
                    </span>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('/about')}
                      className="text-gray-400 hover:text-[var(--overall-color)] transition-colors relative group cursor-pointer pb-1.5"
                    >
                      About
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--overall-color)] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                  {/*  */}
                  <li>
                    <button 
                      onClick={() => handleNavigation('/resume')}
                        className="text-gray-400 hover:text-[var(--overall-color)] transition-colors relative group cursor-pointer pb-1.5"
                    >
                      Resume
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--overall-color)] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('/contact')}
                        className="text-gray-400 hover:text-[var(--overall-color)] transition-colors relative group cursor-pointer pb-1.5"
                    >
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--overall-color)] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                </ul>
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                className="flex justify-center space-x-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="https://www.instagram.com/dharun._72/?igsh=MTRzYjEyNDVieHd5#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/iamdharunkumar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
                <Link href="https://github.com/iamdharunkumar" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com/dharun.kumar.722" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
