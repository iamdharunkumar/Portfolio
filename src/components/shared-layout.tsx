'use client'
import { ReactNode, useEffect, useState, useCallback, useMemo } from "react";
import { Palette, Home, Bookmark, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ 
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface SharedLayoutProps {
  children: ReactNode;
  currentPage: string;
}

export default function SharedLayout({ children, currentPage }: SharedLayoutProps) {
  const [colorIndex, setColorIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Define 5 color themes
  const colorThemes = useMemo(() => [
    "#cbf65e", // Original green
    "#ff6b6b", // Red
    "#4ecdc4", // Teal
    "#45b7d1", // Blue
    "#f9ca24"  // Yellow
  ], []);

  const updateColor = useCallback((index: number) => {
    const color = colorThemes[index];
    document.documentElement.style.setProperty('--overall-color', color);
  }, [colorThemes]);

  const handleColorChange = () => {
    const newIndex = (colorIndex + 1) % colorThemes.length;
    setColorIndex(newIndex);
    updateColor(newIndex);
    // Save preference to localStorage
    localStorage.setItem('portfolioColorIndex', newIndex.toString());
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'about', label: 'About', icon: User, href: '/about' },
    { id: 'contact', label: 'Contact', icon: Bookmark, href: '/contact' },
  ];

  useEffect(() => {
    // Load saved color preference from localStorage and apply it
    const savedColorIndex = localStorage.getItem('portfolioColorIndex');
    if (savedColorIndex) {
      const index = parseInt(savedColorIndex);
      setColorIndex(index);
      const color = colorThemes[index];
      document.documentElement.style.setProperty('--overall-color', color);
    }
    
    // Trigger page entrance animation
    setIsPageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden  lg:mx-25 md:mx-10 mx-5">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/v2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Background texture elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-800 to-transparent opacity-20 transform rotate-12 z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-800 to-transparent opacity-20 transform -rotate-12 z-10"></div>
      
      {/* Color Theme Switcher - Bottom Right Corner */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleColorChange}
          className="h-10 w-full flex items-center space-x-3 px-4 py-3 bg-tranparent border border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          title="Click to change theme color"
        >
          {/* Palette Icon */}
          <div className="flex items-center justify-center w-6 h-6">
            <Palette className="w-5 h-5 text-amber-600" />
          </div>
          
          {/* Text Label */}
          <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
            Change Accent
          </span>
          
          {/* Color Indicator Circle */}
          <div className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0" style={{ backgroundColor: colorThemes[colorIndex] }}></div>
        </button>
      </div>
      
      {/* Desktop Header Section - Hidden on mobile */}
      <motion.div 
        className="relative z-20 pt-8 pb-8 px-16 hidden md:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center">
          {/* Name in top-left */}
          <motion.h1 
            className={`text-3xl font-bold text-gray-300 ${greatVibes.className}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Dharun
          </motion.h1>
          
          {/* Navigation in top-right */}
          <motion.nav
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className={`transition-colors relative group pb-1 ${
                      currentPage === item.id 
                        ? "text-[var(--overall-color)] border-b-2 border-[var(--overall-color)]" 
                        : "text-gray-400 hover:text-[var(--overall-color)]"
                    }`}
                  >
                    {item.label}
                    {currentPage !== item.id && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--overall-color)] transition-all duration-300 group-hover:w-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </motion.div>

      {/* Mobile Header - Name only, visible on mobile */}
      <motion.div 
        className="relative z-20 pt-8 pb-8 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center">
          <motion.h1 
            className={`text-2xl font-bold text-gray-300 ${greatVibes.className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Dharun
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content with Smooth Bottom-to-Top Entrance */}
      <AnimatePresence mode="wait">
        {isPageLoaded && (
          <motion.div 
            key={currentPage}
            className="relative z-10 pb-24 md:pb-8" // Add bottom padding for mobile nav
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut"
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation - Bubble Design */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden ">
        <div className="mx-4 mb-4">
          <div className="backdrop-filter backdrop-blur-lg border border-gray-700 rounded-full px-2 py-2 shadow-2xl">
            <div className="flex items-center justify-around">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const IconComponent = item.icon;
                
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative flex flex-col items-center justify-center py-2 px-3 transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-black rounded-full"
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className={`relative z-10 flex flex-col items-center space-y-1 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {item.label}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
