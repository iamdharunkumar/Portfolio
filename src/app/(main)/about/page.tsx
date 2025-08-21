"use client";
import { 
  GitBranch, 
  Code, 
  Database, 
  Cloud, 
  Globe, 
  Monitor, 
  Smartphone, 
  Palette, 
  Film, 
  Gamepad2,
  Settings,
  Music,
  Pencil
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SharedLayout from "@/components/shared-layout";

export default function AboutPage() {
  const [currentAge, setCurrentAge] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2004-06-05T00:00:00');
      const now = new Date();
      
      // Calculate age in milliseconds
      const ageInMs = now.getTime() - birthDate.getTime();
      
      // Convert to years with high precision
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
      
      // Format to 9 decimal places for dynamic effect
      const formattedAge = ageInYears.toFixed(9);
      
      setCurrentAge(formattedAge);
    };

    // Calculate initial age
    calculateAge();
    
    // Update age every 100ms for smooth dynamic effect
    const interval = setInterval(calculateAge, 100);
    
    // Set loaded state after a short delay for animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <SharedLayout currentPage="about">
      <div className=" sm:px-2 md:px-16 py-8">
        {/* Original About Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-8 lg:gap-16 mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm tracking-widest">ABOUT</span>
                <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">MORE ABOUT ME</h2>
            </div>
            
            {/* Your Profile Image */}
            <div className="w-full sm:w-80 h-64 sm:h-96 rounded-lg overflow-hidden">
              <img 
                src="/IMG_20250817_223242.png" 
                alt="Dharunkumar" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8 pt-8 lg:pt-30">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--overall-color)]">
                Software Developer
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                Caffeine in, clean commits out ☕
              </p>
            </div>

            <div className="space-y-4 text-gray-200 text-sm sm:text-base">
              <p>
                As a  
                <strong className="text-[var(--overall-color)]/80"> Software Development Engineer</strong>, I thrive at the intersection of 
                  <strong className="text-[var(--overall-color)]/80"> scalable backend systems, intuitive frontends, and cloud-powered architectures</strong>. 
                My journey has been fueled by <strong className="text-[var(--overall-color)]/80"> curiosity, problem-solving, and continuous learning</strong>.
              </p>

              <p>
                I&apos;ve designed and delivered <strong className="text-[var(--overall-color)]/80">end-to-end systems</strong> — from 
                <strong className="text-[var(--overall-color)]/80"> database modeling and API design</strong> to 
                <strong className="text-[var(--overall-color)]/80"> deployment pipelines and performance optimization</strong>. My focus is on crafting solutions that are 
                <strong className="text-[var(--overall-color)]/80"> secure, resilient, and user-first</strong>.
              </p>

              <p>
                With 500+ coding challenges solved across platforms, I bring a 
                <strong className="text-[var(--overall-color)]/80"> problem-solving mindset, adaptability, and innovation</strong>. 
                I&apos;m passionate about <strong className="text-[var(--overall-color)]/80">Full-stack development, DevOps, and modern cloud architecture</strong>, 
                and I believe in building <strong className="text-[var(--overall-color)]/80">impactful, high-performance digital experiences</strong> 🚀
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[var(--overall-color)]">&gt;</span>
                  <span>Age: {currentAge} years</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[var(--overall-color)]">&gt;</span>
                  <span>Website: You&apos;re already here!</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[var(--overall-color)]">&gt;</span>
                  <span>Degree: IT Undergrad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[var(--overall-color)]">&gt;</span>
                  <span>Email: dev.dharunkumar@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech-Interests Section */}
        <motion.div 
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-gray-400 text-sm tracking-widest">TECH-INTERESTS</span>
            <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
          </div>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 lg:mx-30 md:mx-20 mx-10"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            {/* Row 1 */}
            <motion.div className="tech-item" variants={itemVariants}>
              <GitBranch className="w-4 h-4 text-orange-500" />
              <span>Git</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-red-500" />
              <span>Java</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-purple-500" />
              <span>C++</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Monitor className="w-4 h-4 text-blue-500" />
              <span>Javascript</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-orange-500" />
              <span>Typescript</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-gray-700" />
              <span>React </span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Next</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Tailwind</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-blue-500" />
              <span>Node</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>Express</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Database className="w-4 h-4 text-blue-500" />
              <span>MongoDB</span>
            </motion.div>

            {/* Row 2 */}
            
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>PostgreSQL</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              <span>Docker</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-blue-500" />
              <span>AWS</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Cloud className="w-4 h-4 text-orange-500" />
              <span>Firebase</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Cloud className="w-4 h-4 text-blue-500" />
              <span>Supabase</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Cloud className="w-4 h-4 text-yellow-500" />
              <span>MySQL</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>Hono</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>ORM</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              <span>CSS</span>
            </motion.div>

            {/* Row 3 */}
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>Drizzle</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>Figma</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>HTML</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>SaaS</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>C</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-blue-500" />
              <span>Github</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Code className="w-4 h-4 text-blue-500" />
              <span>NPM</span>
            </motion.div>
            

            <motion.div className="tech-item" variants={itemVariants}>
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>REST</span>
            </motion.div>
            <motion.div className="tech-item" variants={itemVariants}>
              <Palette className="w-4 h-4 text-pink-500" />
              <span>gRPC</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interests Section */}
        <motion.div 
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-gray-400 text-sm tracking-widest">INTERESTS</span>
            <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div className="interest-item" variants={itemVariants}>
              <Code className="w-6 h-6 text-yellow-500" />
              <span>Coding</span>
            </motion.div>
            <motion.div className="interest-item" variants={itemVariants}>
              <Music className="w-6 h-6 text-purple-500" />
              <span>Music</span>
            </motion.div>
            <motion.div className="interest-item" variants={itemVariants}>
              <Globe className="w-6 h-6 text-pink-500" />
              <span>Surfing Internet</span>
            </motion.div>

            <motion.div className="interest-item" variants={itemVariants}>
              <Smartphone className="w-6 h-6 text-blue-500" />
              <span>Custom Roms</span>
            </motion.div>
            <motion.div className="interest-item" variants={itemVariants}>
              <Pencil className="w-6 h-6 text-orange-500" />
              <span>Editing</span>
            </motion.div>
            <motion.div className="interest-item" variants={itemVariants}>
              <Film className="w-6 h-6 text-teal-500" />
              <span>Watching Movies</span>
            </motion.div>
            <motion.div className="interest-item" variants={itemVariants}>
              <Gamepad2 className="w-6 h-6 text-pink-500" />
              <span>Gaming</span>
            </motion.div>
            <motion.div className="interest-item" variants={itemVariants}>
              <Settings className="w-6 h-6 text-yellow-500" />
              <span>New Technologies</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SharedLayout>
  );
}
