'use client'
import { ReactNode, useEffect, useState, useCallback, useMemo } from "react";
import { Palette, Home, Bookmark, User, FileUser, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import Loader from "./loader";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Define 5 color themes
  const colorThemes = useMemo(() => [
    "#cbf65e", // Original green
    "#1E47EB", // Blue
    "#4ecdc4", // Teal
    "#45b7d1", // Blue
    "#f9ca24", //purple
    '#7A08D1' // Yellow 
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    // Set navigating state
    setIsNavigating(true);
    
    // Close menu first
    closeMobileMenu();
    
    // Add a small delay for smooth transition
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'about', label: 'About', icon: User, href: '/about' },
        {id:'resume', label: 'Resume' , icon : FileUser,href:'/resume' },
    { id: 'contact', label: 'Contact', icon: Bookmark, href: '/contact' }

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
    
    // Reset navigating state
    setIsNavigating(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

      {/* Mobile Header - Name and Menu Icon */}
      <motion.div 
        className="relative z-20 pt-8 pb-8 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center px-4">
          <motion.h1 
            className={`text-2xl font-bold text-gray-300 ${greatVibes.className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Dharun
          </motion.h1>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="p-2  backdrop-blur-sm transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[var(--overall-color)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content with Smooth Bottom-to-Top Entrance */}
      <AnimatePresence mode="wait">
        {isPageLoaded && (
          <motion.div 
            key={currentPage}
            className="relative z-10 pb-8"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.02 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut"
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Loading Indicator */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Loader size="md" className="text-[var(--overall-color)]" />
              <p className="text-gray-300 text-sm">Navigating...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blurred Background */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />
            
            {/* Close Button - Top Right */}
            <motion.button
              onClick={closeMobileMenu}
              className="absolute top-8 right-8 z-10 p-3 rounded-full  backdrop-blur-sm    transition-all duration-300"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-gray-300 hover:text-[var(--overall-color)] transition-colors" />
            </motion.button>

            {/* Menu Content */}
            <motion.div
              className="relative flex flex-col items-center justify-center h-full px-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Menu Title */}
              <motion.h2
                className={`text-4xl font-bold text-gray-300 mb-12 ${greatVibes.className}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Navigation
              </motion.h2>
              
              {/* Navigation Items */}
              <div className="space-y-4 w-full max-w-sm">
                {navItems.map((item, index) => {
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item.href)}
                      className={`block w-full text-center py-3 transition-all duration-300 ${
                        isActive 
                          ? 'text-[var(--overall-color)] text-2xl font-semibold' 
                          : 'text-gray-300 text-xl hover:text-[var(--overall-color)]'
                      }`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Close Hint */}
              <motion.p
                className="text-gray-500 text-sm mt-12 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Tap outside or use the X button to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
