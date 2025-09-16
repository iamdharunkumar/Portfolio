"use client";

import SharedLayout from "@/components/shared-layout";
import { 
  ArrowDownToLineIcon, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Trophy, 
  MapPin, 
  Calendar,
  ExternalLink,
  Star,
  Award,
  Users,
  Target,
  Zap,
  Database,
  Globe,
  Smartphone,
  Shield,
  GitBranch
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ResumePage() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short' as const,
        month: 'short' as const,
        day: '2-digit' as const,
        year: 'numeric' as const,
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        second: '2-digit' as const,
        hour12: true as const
      };
      
      const formattedDate = now.toLocaleDateString('en-US', options);
      const timezone = 'GMT+5.5';
      setCurrentDateTime(`${formattedDate} (${timezone})`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SharedLayout currentPage="resume">
      <div className="sm:px-8 md:px-16">
        <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] mt-10">
          <div className="space-y-16">
            
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm tracking-widest">RESUME</span>
                <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-300">MY RESUME</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Passionate Software Development Engineer with expertise in full-stack development, 
                SaaS products, and innovative solutions.
              </p>
            </div>

            {/* Contact & Download Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--overall-color)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Location</h3>
                    <p className="text-gray-400">Tiruchengode, Tamil Nadu, India</p>
                    <p className="text-gray-400 text-sm mt-1">{currentDateTime}</p>
                  </div>
                </div>
              </div>

              <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowDownToLineIcon className="w-6 h-6 text-[var(--overall-color)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Download Resume</h3>
                    <a 
                      href="/Dharun-Resume.pdf" 
                      download="Dharun-Resume.pdf"
                      className="inline-flex items-center space-x-2 text-[var(--overall-color)] hover:text-opacity-80 transition-colors"
                    >
                      <span>Download PDF</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm tracking-widest">EXPERIENCE</span>
                <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-300">PROFESSIONAL EXPERIENCE</h2>
              
              {/* Timeline Container */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--overall-color)] opacity-30"></div>
                
                <div className="space-y-12">
                  {/* Botify Experience */}
                  <div className="relative flex items-start">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-[var(--overall-color)] rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-300">Software Development Engineer I</h3>
                          <p className="text-[var(--overall-color)] font-medium">Botify</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>Salem</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>June 2025 - Present</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-400">
                              Engineered a SaaS product using Next.js, Hono.js, PostgreSQL (Drizzle ORM), and Stripe/Razorpay for subscription workflows, improving system scalability.
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-400">
                              Implemented authentication and RESTful API endpoints using Hono.js and PostgreSQL.
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-400">
                              Delivered full system architecture from design to production, including modelled database schema, integrated payment flows, and ensured maintainability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Creation Technology Experience */}
                  <div className="relative flex items-start">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-2 border-[var(--overall-color)]">
                      <Briefcase className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-300">Salesforce Associate</h3>
                          <p className="text-[var(--overall-color)] font-medium">Creation Technology</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>Salem</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Jan 2025 - May 2025</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-400">
                              Customized Salesforce CRM and automated workflows using Flows, Apex, and Lightning components.
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-400">
                              Handled admin tasks such as user setup, object configurations, validation rules, and reports.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm tracking-widest">PROJECTS</span>
                <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-300">NOTABLE PROJECTS</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pothole Detection System */}
                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">Pothole Detection System</h3>
                      <p className="text-[var(--overall-color)] font-medium">AI-Powered Road Safety</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Developed a real-time hazard detection system using YOLOv7 and Roboflow, boosting detection accuracy by <span className="text-[var(--overall-color)]">65%</span>.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Automated image processing with Node.js and Jimp, reducing manual work by <span className="text-[var(--overall-color)]">70%</span>.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Built a React.js dashboard for managing pothole reports, improving issue response time by <span className="text-[var(--overall-color)]">40%</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Job Portal */}
                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">Job Portal</h3>
                      <p className="text-[var(--overall-color)] font-medium">Full-Stack Platform</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Built a scalable platform using React.js, Tailwind CSS, and Supabase, improving job match efficiency by <span className="text-[var(--overall-color)]">50%</span>.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Reduced onboarding time by <span className="text-[var(--overall-color)]">70%</span> with Clerk-based role management.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--overall-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Designed a responsive, user-friendly interface using Shadcn UI, increasing user satisfaction by <span className="text-[var(--overall-color)]">60%</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

       

            {/* Education Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm tracking-widest">EDUCATION</span>
                <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-300">EDUCATION</h2>
              
              <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[var(--overall-color)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-300">Bachelor of Technology in Information Technology</h3>
                    <p className="text-[var(--overall-color)] font-medium">Sona College of Technology, Salem</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>2021 - 2025</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Overall GPA: 7.7/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm tracking-widest">ACHIEVEMENTS</span>
                <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-300">ACHIEVEMENTS & RECOGNITION</h2>
              
              <div className="space-y-6">
                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">Coding Excellence</h3>
                      <p className="text-gray-400 mt-2">
                        Practiced and solved <span className="text-[var(--overall-color)] font-semibold">500+ problems</span> across various coding platforms, 
                        demonstrating strong problem-solving skills and algorithmic thinking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">Security Innovation</h3>
                      <p className="text-gray-400 mt-2">
                        Recognized for developing a <span className="text-[var(--overall-color)] font-semibold">QR-based OTP authentication system</span> during PALS Analysis, 
                        enhancing security protocols and mitigating man-in-the-middle attacks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">Smart India Hackathon</h3>
                      <p className="text-gray-400 mt-2">
                        Participated in <span className="text-[var(--overall-color)] font-semibold">Smart India Hackathon (SIH)</span>, where an Automatic Drug Dispenser was developed 
                        for doctors to send prescriptions via email and users to collect medicines by scanning a QR code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
